import { faqs } from "@/data/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageSchema } from "@/lib/seo";

export function FAQSchema() {
  return <JsonLd data={faqPageSchema(faqs)} />;
}
