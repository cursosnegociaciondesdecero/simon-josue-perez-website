// Todo el contenido editable del sitio vive aquí.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Antepone el basePath (necesario en GitHub Pages) a una ruta de /public. */
export const asset = (path: string) => `${basePath}${path}`;

export const site = {
  name: "Negociación desde cero",
  author: "Simón Josué Pérez",
  hero: {
    title: "Aprenda a negociar con Simón Josué Pérez",
    subtitle: "No obtenemos lo que merecemos, sino lo que logramos negociar",
  },
  community: {
    title: "Únase a la comunidad de Whatsapp",
    description:
      "Contenido de valor, no uso IA para escribir mis mensajes . Avisos sobre formaciones, mentorías, juegos de rol y webinars. Publico 3 veces por semana · Gratuito",
    cta: "Escanee el código QR o haga click en el botón a continuación.",
    button: "Únase a la comunidad gratuita de Whatsapp",
    url: "https://chat.whatsapp.com/LJQ4xKm3QWqBti5yCgLK0Z",
    cardTitle: "Negociación Desde Cero",
    cardSubtitle: "WhatsApp community",
  },
  footer: {
    legal:
      "Al enviar su email usted acepta recibir boletines informativos de Negociación  desde cero con noticias, actualizaciones y promociones sobre nuestros productos y servicios. Puede retirar su consentimiento en cualquier momento respondiendo a nuestros mensajes. Para más información, póngase en contacto con nosotros.",
    social: [
      { name: "Youtube", url: "https://www.youtube.com/@negociaciondesdecero" },
      { name: "Instagram", url: "https://www.instagram.com/negociaciondesdecero/" },
      { name: "Tiktok", url: "https://www.tiktok.com/@negociaciondesdecero" },
    ],
    links: [
      { label: "Términos de servicio", url: "https://www.simonjosueperez.com/terms" },
      { label: "Política de privacidad", url: "https://www.simonjosueperez.com/privacy" },
    ],
  },
} as const;
