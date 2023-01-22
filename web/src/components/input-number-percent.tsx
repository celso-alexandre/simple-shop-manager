import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

export function InputNumberPercent(props: InputNumberProps) {
  return (
    <InputNumber
      style={{ width: '100%' }}
      addonAfter="%"
      min={0}
      decimalSeparator=","
      precision={2}
      step={1}
      stringMode
      required
      {...props}
    />
  );
}
