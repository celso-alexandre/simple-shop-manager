import type { TagProps } from 'antd';
import { Tag } from 'antd';

export function BooleanTag({ bool, ...props }: TagProps & { bool: boolean }) {
  return <Tag color={bool ? 'success' : 'error'} {...props} />;
}
