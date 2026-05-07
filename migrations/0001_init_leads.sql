-- =============================================================================
-- Migration 0001 — Initial leads table
-- =============================================================================
-- Target: PostgreSQL 14+ (Neon)
-- Idempotent: safe to re-run.
--
-- How to apply:
--   1) Open Neon → SQL Editor (or `psql $DATABASE_URL`)
--   2) Paste this entire file and run.
--   3) Verify with: SELECT * FROM leads LIMIT 1;
--
-- Naming convention:
--   - Column names: English, snake_case.
--   - Enum-like values: stored as TEXT with CHECK constraints (kept in the
--     same casing/locale that the public form sends, so we don't need a
--     mapping layer between UI and DB).
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;  -- for gen_random_uuid()

-- -----------------------------------------------------------------------------
-- leads
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS leads (
  id                    UUID         PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Required (mirror of the 3 obligatorios in the contact form)
  company_name          TEXT         NOT NULL CHECK (char_length(company_name) BETWEEN 2 AND 120),
  email                 TEXT         NOT NULL CHECK (char_length(email) BETWEEN 3 AND 160),
  products_interested   TEXT[]       NOT NULL CHECK (
                                       cardinality(products_interested) BETWEEN 1 AND 3
                                       AND products_interested <@ ARRAY['cafe','protein','snacks']
                                     ),

  -- Optional qualification fields
  contact_name          TEXT         CHECK (contact_name IS NULL OR char_length(contact_name) <= 120),
  employees_range       TEXT         CHECK (employees_range IS NULL OR employees_range IN ('1-20','21-50','51-100','100+')),
  space_type            TEXT         CHECK (space_type IS NULL OR space_type IN ('oficina','coworking','gimnasio','universidad','otro')),
  city                  TEXT         CHECK (city IS NULL OR char_length(city) <= 60),
  phone                 TEXT         CHECK (phone IS NULL OR char_length(phone) <= 30),
  message               TEXT         CHECK (message IS NULL OR char_length(message) <= 2000),

  -- Habeas Data compliance: explicit consent timestamp.
  consent_accepted_at   TIMESTAMPTZ  NOT NULL,

  -- Source tracking
  source                TEXT         NOT NULL DEFAULT 'landing_nexotech_io',
  utm_source            TEXT,
  utm_medium            TEXT,
  utm_campaign          TEXT,
  utm_term              TEXT,
  utm_content           TEXT,

  -- Forensic metadata (no PII in clear; ip_hash is a salted SHA-256 prefix)
  user_agent            TEXT         CHECK (user_agent IS NULL OR char_length(user_agent) <= 512),
  referer               TEXT         CHECK (referer IS NULL OR char_length(referer) <= 512),
  ip_hash               TEXT         CHECK (ip_hash IS NULL OR char_length(ip_hash) <= 64),

  -- CRM-lite (so the table is useful end-to-end without an external CRM yet)
  status                TEXT         NOT NULL DEFAULT 'new'
                                     CHECK (status IN ('new','contacted','qualified','converted','lost','spam')),
  notes                 TEXT,

  -- Timestamps
  created_at            TIMESTAMPTZ  NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ  NOT NULL DEFAULT now()
);

-- -----------------------------------------------------------------------------
-- Indexes (only the ones we'll actually query by)
-- -----------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS leads_email_idx       ON leads (lower(email));
CREATE INDEX IF NOT EXISTS leads_status_idx      ON leads (status);
CREATE INDEX IF NOT EXISTS leads_created_at_idx  ON leads (created_at DESC);

-- -----------------------------------------------------------------------------
-- Trigger: keep updated_at fresh on UPDATE
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_set_updated_at ON leads;
CREATE TRIGGER leads_set_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION set_updated_at();

-- -----------------------------------------------------------------------------
-- Sanity check
-- -----------------------------------------------------------------------------
COMMENT ON TABLE leads IS
  'Inbound leads captured by the public contact form on nexotech.io. '
  'Inserted by the Vercel Server Action src/app/contacto/actions.ts → '
  'src/lib/db/leads.ts:insertLead().';
