export const formatCurrencyByNation = (
  amount: number,
  locale = 'it-IT',
  nation = 'VND',
  currency = 'code',
  hasFraction = 0
) => {
  return amount?.toLocaleString(locale, {
    style: 'currency',
    currency: nation,
    currencyDisplay: currency === 'code' ? 'code' : 'symbol',
    minimumFractionDigits: hasFraction,
    maximumFractionDigits: 2
  });
};

export const calculatorDiscount = (basePrice: number, discount: number) => {
  return (discount / basePrice) * 100;
};
