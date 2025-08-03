const formatItalianPhone = (phone) => {
  let cleaned = phone.replace(/\D/g, '');

  // Remove prefixos internacionais (+39, 0039, 39)
  cleaned = cleaned.replace(/^(0039|\+39|39)/, '');

  // Regras principais:
  // - Celulares: 10 dígitos, começando com 3
  // - Fixos: 6-11 dígitos, começando com 0 (ou adiciona 0 se faltar)
  // - Números curtos (8-9 dígitos) são tratados como celulares ou fixos

  // Caso 1: Celular válido (10 dígitos, começa com 3)
  if (cleaned.match(/^3\d{9}$/)) {
    return cleaned;
  }

  // Caso 2: Fixo válido (6-11 dígitos, começa com 0)
  if (cleaned.match(/^0\d{5,10}$/)) {
    return cleaned;
  }

  // Caso 3: Número de 8-9 dígitos (assume celular ou fixo sem prefixo)
  if (cleaned.length >= 8 && cleaned.length <= 9) {
    if (cleaned.match(/^[0-2]/)) {
      return `0${cleaned}`; // Fixo sem 0
    } else {
      return `3${cleaned}`; // Celular sem 3
    }
  }

  // Caso 4: Número com 39 incluso (12 dígitos)
  if (cleaned.match(/^39\d{10}$/)) {
    return cleaned.substring(2); // Remove 39, mantém 10 dígitos
  }

  return null; // Inválido
};

export default formatItalianPhone;