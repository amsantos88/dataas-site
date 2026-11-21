export const WHATSAPP_NUMERO = "5531992967504";
export const WHATSAPP_EXIBICAO = "(31) 99296-7504";
export const EMAIL = "contato@dataasbr.com";

const mensagem = "Olá! Vim pelo site da Data AS e quero conversar sobre um projeto de dados.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Projeto de dados")}`;
