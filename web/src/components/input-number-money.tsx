import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

export function InputNumberMoney(props: InputNumberProps) {
  return (
    <InputNumber
      style={{ width: '100%' }}
      addonBefore="$"
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
