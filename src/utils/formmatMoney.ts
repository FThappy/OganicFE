export const formatCurrencyByNation = (amount: number, locale = 'it-IT', nation = 'VND') => {
  const hasFraction = amount % 1 !== 0;
  return amount?.toLocaleString(locale, {
    style: 'currency',
    currency: nation,
    currencyDisplay: 'code',
    minimumFractionDigits: hasFraction ? 2 : 0,
    maximumFractionDigits: 2
  });
};

export const calculatorDiscount = (basePrice: number, discount: number) => {
  return (discount / basePrice) * 100;
};
