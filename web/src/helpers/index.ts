const decimalToIntMultiplier = 100;
export function serializeDecimalAsInt<T extends number | undefined>(value: T) {
  if (!value) return value;
  return Math.round(value * decimalToIntMultiplier);
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
  }).format(value);
}

export function objectPropertiesSet<T extends object>(data: T) {
  return Object.entries(data).reduce((prev, cur) => {
    const [key, val] = cur;
    if (key === '__typename') return prev;
    return {
      ...prev,
      [key]: { set: typeof val === 'object' && Object.keys(val).length ? { ...val, __typename: undefined } : val },
    };
  }, {} as any);
}
