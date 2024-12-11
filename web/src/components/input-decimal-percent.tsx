import { InputNumber } from 'antd';

type Props = Parameters<typeof InputNumber>[0];
export function InputDecimalPercent(props: Props) {
  return (
    <InputNumber
      controls
      step={0.01}
      decimalSeparator="."
      precision={2}
      formatter={(val) => {
        if (!val) return '';
        const numberVal = parseFloat(val as any) || 0;
        return `${(numberVal * 100).toFixed(2)}%`;
      }}
      parser={(val) => {
        if (!val) return '';
        const parsed = parseFloat(val.replace('%', '')) || 0;
        if (!parsed) return 0;
        return parsed / 100;
      }}
      {...props}
    />
  );
}
