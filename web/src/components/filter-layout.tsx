import React from 'react';
import { Button, Row } from 'antd';
import { RiFilterOffLine } from 'react-icons/ri';

interface ListFilterLayoutProps {
  content: React.ReactNode[];
  clearQuery: () => void;
}

export const ListFilterLayout = ({ content, clearQuery }: ListFilterLayoutProps) => {
  return (
    <>
      <Row justify="end">
        <div style={{ width: '100%' }}>
          <Button
            style={{ background: 'none', border: 'none', float: 'right', padding: 0 }}
            size="small"
            onClick={clearQuery}
          >
            <RiFilterOffLine className="anticon" />
            <span>Limpar filtros</span>
          </Button>
        </div>
      </Row>
      <Row align="bottom" gutter={[16, 16]}>
        {content.map(item => item)}
      </Row>
    </>
  );
};
