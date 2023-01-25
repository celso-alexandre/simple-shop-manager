import { MaskedInput } from 'antd-mask-input';
import type { MaskedInputProps } from 'antd-mask-input/build/main/lib/MaskedInput';

export function InputPhone(props: Omit<MaskedInputProps, 'mask'>) {
  return <MaskedInput mask="+55 (00) 00000-0000" {...props} />;
}
