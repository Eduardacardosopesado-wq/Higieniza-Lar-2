export const COMPANY = {
  NAME: "Higieniza Lar",
  SUBTITLE: "Higienização e Impermeabilização de Estofados",
  PHONE_FORMATTED: "(27) 99247-9840",
  WHATSAPP_NUMBER: "5527992479840",
  DEFAULT_WHATSAPP_MESSAGE: "Olá! Vim pelo site do Google e gostaria de solicitar um orçamento.",
  WHATSAPP_URL: `https://wa.me/5527992479840?text=${encodeURIComponent("Olá! Vim pelo site do Google e gostaria de solicitar um orçamento.")}`,
  INSTAGRAM_HANDLE: "@higienizalarvix",
  INSTAGRAM_URL: "https://www.instagram.com/higienizalarvix/",
  UNIT: "Jardim Camburi, Vitória — ES",
  CITY: "Vitória",
  STATE: "ES",
  SERVICE_AREA: "Toda a Grande Vitória — ES",
  CITIES_SERVED: [
    { name: "Vitória", highlight: "Jardim Camburi (Unidade) e todos os bairros" },
    { name: "Vila Velha", highlight: "Praia da Costa, Itapuã, Itaparica e região" },
    { name: "Serra", highlight: "Laranjeiras, Manguinhos, Jacaraípe e região" },
    { name: "Cariacica", highlight: "Campo Grande, Jardim América e região" },
    { name: "Viana", highlight: "Centro, Marcílio de Noronha e região" }
  ],
  GOOGLE_REVIEWS_URL: "https://maps.google.com/?q=Higieniza+Lar+Jardim+Camburi+Vitoria+ES"
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || COMPANY.DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${COMPANY.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteWhatsAppMessage(data: {
  name: string;
  whatsapp: string;
  location: string;
  service: string;
  upholsteryType: string;
  quantity: string;
  notes?: string;
}): string {
  let msg = `Olá! Gostaria de solicitar um orçamento com a Higieniza Lar:\n\n`;
  msg += `👤 *Nome:* ${data.name || "Não informado"}\n`;
  msg += `📱 *WhatsApp:* ${data.whatsapp || "Não informado"}\n`;
  msg += `📍 *Cidade/Bairro:* ${data.location || "Grande Vitória"}\n`;
  msg += `🛠️ *Serviço desejado:* ${data.service || "Higienização"}\n`;
  msg += `🛋️ *Tipo de estofado:* ${data.upholsteryType || "Sofá"}\n`;
  if (data.quantity) {
    msg += `🔢 *Quantidade/Assentos:* ${data.quantity}\n`;
  }
  if (data.notes) {
    msg += `📝 *Observações:* ${data.notes}\n`;
  }
  return msg;
}
