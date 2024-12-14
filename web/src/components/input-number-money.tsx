import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

export function InputNumberMoney(props: InputNumberProps) {
  return (
    <InputNumber
      style={{ width: '100%' }}
      addonBefore="R$"
      min={0}
      decimalSeparator=","
      precision={2}
      step={0.25}
      stringMode
      required
      {...props}
    />
  );
}
