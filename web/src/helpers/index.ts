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
  }).format(serializeIntAsDecimal(value));
}

export function formatPercentFromDecimal<T extends number | undefined>(value: T) {
  if (!value) return value;
  return Intl.NumberFormat(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value * 100);
}
