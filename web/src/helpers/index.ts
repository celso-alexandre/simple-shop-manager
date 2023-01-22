const decimalToIntMultiplier = 100;
export function serializeDecimalAsInt<T extends number | undefined>(value: T) {
  if (!value) return value;
  return value * decimalToIntMultiplier;
}

export function serializeIntAsDecimal<T extends number | undefined>(value: T) {
  if (!value) return value;
  return value / decimalToIntMultiplier;
}

export function formatMoneyFromInt<T extends number | undefined>(value: T) {
  if (!value) return value;
  return Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'BRL',
    // minimumFractionDigits: 2,
    // signDisplay: 'auto',
    // currencyDisplay: 'R$',
  }).format(serializeIntAsDecimal(value));
}
