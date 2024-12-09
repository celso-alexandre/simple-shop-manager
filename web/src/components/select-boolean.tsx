import { Select } from 'antd';
import { SelectProps } from 'antd/lib';

type Props = Omit<SelectProps, 'children'>;
export function SelectBoolean(props: Props) {
  return (
    <div className="flex flex-col">
      {!!props.title && <label className="font-semibold">{props.title}</label>}
      <Select className="min-w-48" allowClear {...props}>
        <Select.Option value={true}>Sim</Select.Option>
        <Select.Option value={false}>Não</Select.Option>
      </Select>
    </div>
  );
}
