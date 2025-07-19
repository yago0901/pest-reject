const formatItalianPhone = (phone) => {
  // Remove tudo que não for dígito
  let cleaned = phone.replace(/\D/g, '');

  // Remove prefixos internacionais (+39, 0039, 39)
  cleaned = cleaned.replace(/^(0039|\+39|39)/, '');

  // Valida:
  // - Fixos: 9-11 dígitos (começando com 0)
  // - Móveis: 10 dígitos (começando com 3)
  if (/^0\d{8,10}$/.test(cleaned) || /^3\d{9}$/.test(cleaned)) {
    return cleaned;
  }
  
  return null; // Inválido
};

export default formatItalianPhone;