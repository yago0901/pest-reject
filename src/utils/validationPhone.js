const formatItalianPhone = (phone) => {
  // Remove tudo que não for dígito
  let cleaned = phone.replace(/\D/g, '');

  // Remove prefixos internacionais (+39, 0039, 39)
  if (cleaned.match(/^(0039|\+39|39)/)) {
    cleaned = cleaned.replace(/^(0039|\+39|39)/, '');
  }

  // Verifica se o número começa com 0 (fixo) ou 3 (móvel)
  const isLandline = cleaned.match(/^0/);
  const isMobile = cleaned.match(/^3/);

  // Validação para números italianos:
  // - Fixos: 6-11 dígitos (incluindo o 0 inicial)
  // - Móveis: 10 dígitos (incluindo o 3 inicial)
  // - Se tiver entre 2-9 dígitos, assume que está faltando o prefixo 0 (para fixos)
  // - Se tiver 9 dígitos começando com 3, assume ser móvel sem o 39

  // Caso 1: Número completo (fixo ou móvel)
  if ((isLandline && cleaned.length >= 6 && cleaned.length <= 11) || 
      (isMobile && cleaned.length === 10)) {
    return cleaned;
  }

  // Caso 2: Número de fixo sem o 0 inicial (2-9 dígitos)
  if (!isLandline && !isMobile && cleaned.length >= 2 && cleaned.length <= 9) {
    return '0' + cleaned;
  }

  // Caso 3: Número móvel sem o 39 (8 dígitos)
  if (!isLandline && cleaned.length === 8) {
    return '3' + cleaned;
  }

  // Caso 4: Número móvel com 39 (10 dígitos no total)
  if (cleaned.length === 10 && cleaned.match(/^39/)) {
    return cleaned;
  }

  // Caso 5: Número muito curto ou muito longo
  return null; // Inválido
};

export default formatItalianPhone;