import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

type Props = Parameters<typeof RangePicker>[0];
export function CustomRangePicker(props: Props) {
  return (
    <RangePicker
      format="DD/MM/YYYY"
      allowClear
      presets={[
        {
          label: 'Mês',
          value: [dayjs().startOf('month'), dayjs().endOf('month')],
        },
        {
          label: 'Semana',
          value: [dayjs().startOf('week'), dayjs().endOf('week')],
        },
        {
          label: 'Hoje',
          value: [dayjs().startOf('day'), dayjs().endOf('day')],
        },
        {
          label: 'Ontem',
          value: [
            dayjs().subtract(1, 'day').startOf('day'),
            dayjs().subtract(1, 'day').endOf('day'),
          ],
        },
      ]}
      {...props}
    />
  );
}
