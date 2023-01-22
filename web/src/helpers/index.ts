const decimalToIntMultiplier = 100;
export function serializeDecimalAsInt<T extends number | undefined>(value: T) {
  if (!value) return value;
  return value * decimalToIntMultiplier;
}

export function serializeIntAsDecimal<T extends number | undefined>(value: T) {
  if (!value) return value;
  return value / decimalToIntMultiplier;
}
