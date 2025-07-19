const formatItalianPhone = (phone) => {
  // Remove TUDO que não for dígito
  let cleaned = phone.replace(/\D/g, '');
  
  // Remove prefixos internacionais (+39, 0039, 39)
  cleaned = cleaned.replace(/^(0039|\+39|39)/, '');
  
  // Valida:
  // - 10 dígitos EXATOS
  // - Celulares começam com 3 (opcional)
  return /^[0-9]{10}$/.test(cleaned) ? cleaned : null;
};

export default formatItalianPhone;