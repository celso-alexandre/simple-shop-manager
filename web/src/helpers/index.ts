const decimalToIntMultiplier = 100;
export function serializeDecimalAsInt<T extends number | undefined>(value: T) {
  if (!value) return value;
  return Math.round(value * decimalToIntMultiplier);
}

export function serializeIntAsDecimal<T extends number | undefined>(value: T) {
  if (!value) return value;
  return value / decimalToIntMultiplier;
}

export function formatMoneyFromDecimal<T extends number | undefined>(value: T) {
  return Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
}

export function formatMoneyFromInt<T extends number | undefined>(value: T) {
  if (!value) return formatMoneyFromDecimal(0);
  const val = value / decimalToIntMultiplier;
  return formatMoneyFromDecimal(val);
}

export function formatPercentFromDecimal<T extends number | undefined>(
  value: T
) {
  if (!value) return '';
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
      [key]: {
        set:
          typeof val === 'object' && Object.keys(val).length
            ? { ...val, __typename: undefined }
            : val,
      },
    };
  }, {} as any);
}

export function getNetMargin(
  price: number,
  cost: number,
  infinityToDecimal?: number
) {
  const value = price - cost;
  const decimal = value / cost;
  const infinity =
    typeof infinityToDecimal === 'number' && !Number.isFinite(decimal);

  return {
    value,
    decimal: infinity ? infinityToDecimal : decimal,
    percent: infinity ? infinityToDecimal : decimal * decimalToIntMultiplier,
  };
}

export function getPercentPretty(cost: number, value: number) {
  if (!cost) return '0 %';
  return Intl.NumberFormat(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cost / value);
}

export function preciseParseFloat(
  value: string | number,
  precision: number
): number {
  const v = typeof value === 'string' ? parseFloat(value) : value;
  return parseFloat(v.toFixed(precision));
}

export function addMargin(
  cost: number,
  netMarginPercDec: number,
  precision: number
): number {
  const sellingPrice = cost * (1 + netMarginPercDec);
  const rounded = preciseParseFloat(sellingPrice, precision);

  // console.log(
  //   'cost',
  //   cost,
  //   'netMarginPercDec',
  //   netMarginPercDec,
  //   'sellingPrice',
  //   sellingPrice,
  //   'rounded',
  //   rounded
  // );

  return rounded;
}
