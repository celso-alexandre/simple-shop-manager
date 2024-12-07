import { Typography } from 'antd';

export function Title({ title }: { title: string }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography.Title level={2}>{title}</Typography.Title>
    </div>
  );
}
