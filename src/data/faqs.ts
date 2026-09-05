export type Faq = { question: string; answer: string };

export const faqs: ReadonlyArray<Faq> = [
  {
    question: "¿Cuánto cuesta instalar una máquina Nexo?",
    answer:
      "Depende de la modalidad. En comodato (la opción más común), cero — la instalación, la máquina y el mantenimiento no tienen costo para tu empresa. Si optas por suministros, arrendamiento o revenue sharing, la propuesta se ajusta al caso. Lo definimos contigo en la conversación inicial.",
  },
  {
    question: "¿Qué incluye el mantenimiento?",
    answer:
      "Todo. Nexo se encarga del abastecimiento de insumos, limpieza técnica, mantenimiento preventivo y correctivo, y monitoreo remoto de la máquina. Si algo falla, nuestro equipo responde en menos de 24 horas.",
  },
  {
    question: "¿Hay algún compromiso o contrato a largo plazo?",
    answer:
      "Sí firmamos un contrato — comodato, suministros, arrendamiento o revenue sharing, según la modalidad acordada. Los términos los acordamos contigo: buscamos condiciones flexibles que funcionen para tu empresa y la nuestra. Sin permanencia obligatoria larga, sin letra pequeña.",
  },
  {
    question: "¿Cuánto tarda la instalación?",
    answer:
      "El tiempo depende de la disponibilidad operativa del mes. Te confirmamos fechas concretas en la conversación inicial; mientras tanto avanzamos con la viabilidad, el match de productos y el contrato comercial para que nada dependa solo del equipo.",
  },
  {
    question: "¿Qué productos ofrecen las máquinas?",
    answer:
      "Depende de la línea. Nexo Café es la máquina de café para empresas (espresso, americano, cappuccino y más). Nexo Protein, proteína lista al instante. Nexo Snacks, una selección curada de snacks con opciones saludables y antojos de calidad. Las opciones específicas las ajustamos contigo según el espacio y el tipo de consumo.",
  },
  {
    question: "¿Sirve para oficinas, gimnasios y coworkings?",
    answer:
      "Sí. Oficinas: café y snacks, el equipo no sale del edificio. Gimnasios: proteína post-entreno; el gym no opera, y en alto flujo hay revenue sharing. Coworkings: café y snacks como amenidad, sin inventario para el operador. En los tres casos la modalidad más común es el vending en comodato: máquina sin inversión.",
  },
  {
    question: "¿En qué zonas de Medellín tienen cobertura?",
    answer:
      "Actualmente operamos en todo el Área Metropolitana del Valle de Aburrá: Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella. Si estás en otra zona, contáctanos. Estamos en expansión.",
  },
  {
    question: "¿Qué modalidades comerciales ofrecen?",
    answer:
      "Trabajamos cuatro modalidades, todas con el mismo deliverable (máquina, productos, operación y mantenimiento). Cambia solo el modelo de pago: Comodato (entregamos el equipo sin costo, los usuarios pagan por consumo), Suministros (servicio completo con un compromiso mensual acordado), Arrendamiento (renta fija mensual con todo incluido) y Revenue sharing (porcentaje de ventas, ideal para espacios de alto flujo). Las más comunes son comodato y suministros; las otras se evalúan caso a caso. Definimos juntos cuál calza mejor con tu operación.",
  },
];

export const cafeFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Cuánto cuesta una máquina de café para empresas en Medellín?",
    answer:
      "En comodato, la modalidad más común, tu empresa no paga la máquina ni la instalación. Es vending en comodato: máquina sin inversión. Nexo opera, abastece y mantiene. Los colaboradores pagan cada bebida a precio accesible, o la empresa puede subsidiar el consumo. Otras modalidades (suministros, arrendamiento) se cotizan según el punto.",
  },
  {
    question: "¿Qué bebidas incluye Nexo Café?",
    answer:
      "El menú se acuerda con cada empresa. El mix típico incluye espresso, americano, cappuccino, latte, café con leche, tinto, chocolate caliente y mocaccino. Entre 13 y 21 bebidas configurables según el equipo.",
  },
  {
    question: "¿Hay que comprar la máquina o hacer obras?",
    answer:
      "No. Nexo instala en comodato: sin obras, sin inversión en el equipo. Solo se necesita un punto eléctrico estable y un espacio interior con acceso para abastecer.",
  },
  {
    question: "¿En cuánto tiempo instalan Nexo Café?",
    answer:
      "El tiempo depende de la disponibilidad operativa del mes. En la conversación inicial confirmamos fechas y avanzamos viabilidad, menú y contrato para que la instalación no dependa solo del equipo.",
  },
  {
    question: "¿Cubren Envigado, Sabaneta y el resto del Valle de Aburrá?",
    answer:
      "Sí. Operamos en Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella. Si tu oficina está en otra ciudad, contáctanos: estamos en expansión.",
  },
  {
    question: "¿Es mejor una máquina vending de café o una cafetería interna?",
    answer:
      "Depende del tamaño y del horario. Una cafetería implica personal, horarios y proveedores. Una máquina de café para empresas opera cuando el equipo la necesita, sin turnos. Nexo asume abastecimiento y mantenimiento; la empresa no monta una operación de alimentos.",
  },
  {
    question: "¿La máquina de café para empresas sirve solo en oficinas?",
    answer:
      "No. Es la misma línea para oficinas, coworkings y universidades. En oficina el dolor es no salir del edificio. En coworking es ofrecer café como amenidad sin operar una cafetería. El equipo y la operación son los de Nexo Café.",
  },
];

export const vendingCorporativoFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Qué es el vending corporativo o las máquinas expendedoras para empresas?",
    answer:
      "Es el mismo servicio: máquinas expendedoras (vending) instaladas en empresas — café, snacks o proteína — con la operación a cargo del proveedor. En Nexo la empresa no compra el equipo: nosotros instalamos, abastecemos y mantenemos.",
  },
  {
    question: "¿El vending corporativo tiene costo para la empresa?",
    answer:
      "En comodato, la modalidad más usada, no hay costo de máquina ni de instalación. Los colaboradores pagan cada consumo, o la empresa subsidia lo que quiera. Otras modalidades (suministros, arrendamiento, revenue sharing) se cotizan según el punto.",
  },
  {
    question: "¿Qué máquinas ofrece Nexo en Medellín?",
    answer:
      "Tres líneas: Nexo Café para oficinas y coworkings, Nexo Snacks para espacios corporativos y Nexo Protein para gimnasios. Se pueden combinar según el flujo del edificio.",
  },
  {
    question: "¿En qué zonas instalan vending corporativo?",
    answer:
      "Valle de Aburrá: Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella. Otras ciudades se evalúan caso a caso.",
  },
  {
    question: "¿Cuánto tarda la instalación?",
    answer:
      "Depende de la disponibilidad operativa del mes y del tipo de máquina. En la primera conversación confirmamos fechas; mientras tanto avanzamos viabilidad, mix de productos y contrato.",
  },
  {
    question: "¿Instalan en oficinas, gimnasios y coworkings?",
    answer:
      "Sí. Oficinas: café y snacks. Gimnasios: proteína post-entreno, con comodato o revenue sharing. Coworkings: café y snacks como amenidad, sin que el operador gestione alimentos. Las tres verticales están en Medellín y el Valle de Aburrá.",
  },
];

export const comodatoFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Qué es el comodato de una máquina vending?",
    answer:
      "Vending en comodato: Nexo entrega e instala la máquina en tu espacio sin que la empresa la compre. Es una máquina vending sin inversión. El equipo sigue siendo de Nexo. Nosotros operamos, abastecemos y damos soporte. Los usuarios pagan el consumo, o la empresa subsidia.",
  },
  {
    question: "¿Qué es una máquina vending sin inversión?",
    answer:
      "Es el vending en comodato de Nexo. La empresa no paga el equipo ni la instalación. Nexo opera el punto. Hay un mínimo de consumo mensual acordado según la máquina. Aplica a café para empresas, snacks y proteína.",
  },
  {
    question: "¿El comodato sirve para oficina, gym y coworking?",
    answer:
      "Sí. Es la modalidad más usada en los tres. Oficina y coworking: café y snacks, la empresa o el operador no compran el equipo. Gimnasio: proteína en comodato, o revenue sharing si el flujo lo sostiene.",
  },
  {
    question: "¿Comodato es lo mismo que alquilar la máquina?",
    answer:
      "No. En arrendamiento hay una renta fija mensual. En comodato no hay canon por el equipo: el modelo se sostiene con el consumo del punto. Por eso cada máquina tiene un mínimo de compra mensual acordado.",
  },
  {
    question: "¿La empresa tiene que garantizar un mínimo de ventas?",
    answer:
      "Sí. Cada equipo tiene un mínimo de consumo mensual según tamaño y línea. Si el punto no lo alcanza de forma sostenida, se puede reubicar o retirar el equipo, con aviso previo. Lo definimos en el contrato.",
  },
  {
    question: "¿Qué incluye el comodato de Nexo?",
    answer:
      "Máquina, instalación, activación del punto, abastecimiento, limpieza, mantenimiento preventivo y correctivo, monitoreo y valores de pago (efectivo, datáfono y/o QR). La empresa aporta espacio interior y punto eléctrico.",
  },
  {
    question: "¿Puedo cancelar el comodato?",
    answer:
      "Firmamos contrato (típicamente 12 meses, renovable). Los términos los acordamos contigo: buscamos condiciones flexibles, sin permanencia abusiva. La salida se tramita según lo firmado.",
  },
];

export const snacksFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Cuánto cuesta una máquina vending de snacks para oficina?",
    answer:
      "En comodato no hay costo de máquina ni de instalación. Nexo abastece, rota el portafolio y mantiene el equipo. Los colaboradores pagan cada producto, o la empresa puede configurar un subsidio corporativo.",
  },
  {
    question: "¿Qué productos van en Nexo Snacks?",
    answer:
      "Una selección curada: opciones saludables y antojos de calidad. El mix final se define con tu empresa y rota según el consumo real del punto — no es un surtido genérico fijo.",
  },
  {
    question: "¿La máquina sirve también bebidas frías?",
    answer:
      "Sí. Las máquinas Nexo Snacks se configuran con snacks, bebidas y productos saludables. Temperatura ajustable y portafolio personalizable según el espacio.",
  },
  {
    question: "¿Qué pasa si un producto no se vende?",
    answer:
      "Rotamos según el consumo real. Si una referencia no gira, la reemplazamos. El objetivo es disponibilidad y un surtido que tu equipo sí consume.",
  },
];

export const oficinasFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Cuánto cuesta el vending para una oficina en Medellín?",
    answer:
      "En comodato, la modalidad más usada, la empresa no paga la máquina ni la instalación. Nexo opera y abastece. Los colaboradores pagan cada consumo, o la oficina subsidia café o snacks. Otras modalidades se cotizan según el flujo del punto.",
  },
  {
    question: "¿Qué máquinas van en una oficina?",
    answer:
      "Lo más frecuente es Nexo Café, sola o con Nexo Snacks. Proteína solo tiene sentido si hay un espacio de entrenamiento en el edificio. El mix se define con el flujo real: número de personas, turnos y si hay cafetería interna.",
  },
  {
    question: "¿Facilities tiene que operar o comprar insumos?",
    answer:
      "No. Nexo instala, repone, limpia y da soporte. La oficina aporta un espacio interior y un punto eléctrico estable. Un interlocutor, respuesta en menos de 24 horas.",
  },
  {
    question: "¿Hay que hacer obras o comprar el equipo?",
    answer:
      "No. Instalamos sin obras. El equipo sigue siendo de Nexo. Si el punto no alcanza el mínimo de consumo acordado, se puede reubicar o retirar, con aviso previo.",
  },
  {
    question: "¿Cubren oficinas en Envigado, Sabaneta o Itagüí?",
    answer:
      "Sí. Operamos en Medellín y el Valle de Aburrá: Envigado, Sabaneta, Itagüí, Bello y La Estrella. Otras ciudades se evalúan caso a caso.",
  },
];

export const gimnasiosFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Cómo funciona el vending de proteína en un gimnasio?",
    answer:
      "Instalamos Nexo Protein en el punto de mayor flujo (salida de salas, zona de pesas o recepción). Los socios compran batidos y barras al instante. Nexo abastece y mantiene. El gym no monta barra ni asigna personal.",
  },
  {
    question: "¿El gimnasio gana con las ventas? ¿Qué es revenue sharing?",
    answer:
      "En gimnasios de alto flujo evaluamos revenue sharing: un porcentaje de las ventas del punto para el gym. En otros casos usamos comodato, sin canon por el equipo. La modalidad se define con el tráfico real de la sede.",
  },
  {
    question: "¿El gym tiene que invertir o operar la máquina?",
    answer:
      "En comodato, no. Nexo entrega el equipo, instala y opera. El gimnasio aporta espacio interior, punto eléctrico y acceso para reposición. Sin obras.",
  },
  {
    question: "¿Qué productos van en la máquina?",
    answer:
      "Batidos whey y barras funcionales de marcas confiables. Sabores y formatos se acuerdan con cada sede según el perfil de los socios. Rotamos lo que no gira.",
  },
  {
    question: "¿Sirve para gimnasios en Medellín y el Valle de Aburrá?",
    answer:
      "Sí. Cubrimos Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella. Pedimos un flujo constante: Nexo Protein está pensado para sedes con rotación, no para estudios de bajo tráfico.",
  },
];

export const coworkingsFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Por qué un coworking pondría vending en vez de una cafetería?",
    answer:
      "Una cafetería pide personal, horarios y proveedores. El vending opera cuando el miembro está, sin turnos. El operador del coworking no gestiona alimentos: Nexo opera el punto.",
  },
  {
    question: "¿Quién opera café y snacks en el espacio?",
    answer:
      "Nexo. Instalamos, abastecemos, limpiamos y damos soporte. El coworking aporta ubicación visible (kitchenette, zona común o recepción) y un punto eléctrico. Cero inventario para el operador.",
  },
  {
    question: "¿El coworking paga la máquina?",
    answer:
      "En comodato, no. No hay costo de equipo ni de instalación. Los miembros pagan cada consumo a precio accesible. Si el operador quiere subsidiar café como amenidad, se configura en la propuesta.",
  },
  {
    question: "¿Qué líneas encajan en un coworking?",
    answer:
      "Nexo Café es la base. Nexo Snacks suma si hay kitchenette o zona de descanso con tráfico todo el día. Proteína solo si el edificio tiene gym o wellness.",
  },
  {
    question: "¿Instalan en coworkings de Medellín y el Valle de Aburrá?",
    answer:
      "Sí. Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella. Validamos flujo de miembros y ubicación del punto antes de instalar.",
  },
];

export const proteinFaqs: ReadonlyArray<Faq> = [
  {
    question: "¿Cómo funciona el vending de proteína en un gimnasio?",
    answer:
      "Instalamos una máquina Nexo Protein en el punto de mayor flujo. Los socios compran batidos y barras al instante, sin barra ni espera. Nexo abastece, limpia y mantiene. El gimnasio no opera el servicio.",
  },
  {
    question: "¿El gym tiene que invertir en la máquina?",
    answer:
      "En comodato, no. Nexo entrega el equipo, la instalación y la operación. También evaluamos revenue sharing en gimnasios de alto flujo, para que el espacio participe de las ventas.",
  },
  {
    question: "¿Qué proteína ofrecen?",
    answer:
      "Batidos whey y barras funcionales de marcas confiables. El mix (sabores y formatos) se acuerda con cada gimnasio según el perfil de sus socios.",
  },
  {
    question: "¿Sirve para gimnasios de alto flujo en Medellín?",
    answer:
      "Sí. Nexo Protein está pensado para gyms con rotación constante: post-entreno inmediato, sin filas y con reposición programada. Cubrimos el Valle de Aburrá.",
  },
];
