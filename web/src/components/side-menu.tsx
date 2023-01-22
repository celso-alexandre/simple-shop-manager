import { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { FiUsers } from 'react-icons/fi';
import { BiBarcode, BiListPlus, BiListUl } from 'react-icons/bi';
import { MdOutlineAddBusiness, MdOutlinePointOfSale } from 'react-icons/md';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

export function SideMenu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)',
  });
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(bol => !bol);
  };

  useEffect(() => {
    setCollapsed(!isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  const items: (MenuItem & {
    children?: MenuItem[];
  })[] = [
    {
      key: '1',
      label: 'Vendas',
      icon: <MdOutlinePointOfSale />,
      children: [
        {
          key: '1.1',
          label: 'Listar Vendas',
          icon: <BiListUl />,
          onClick: () => navigate('/sales'),
        },
        {
          key: '1.2',
          label: 'Nova venda',
          icon: <BiListPlus />,
          onClick: () => navigate('/sale'),
        },
      ],
    },
    {
      key: '2',
      label: 'Produtos',
      icon: <BiBarcode />,
      onClick: () => navigate('/products'),
    },
    {
      key: '3',
      label: 'Fornecedores',
      icon: <MdOutlineAddBusiness />,
      onClick: () => navigate('/providers'),
    },
    {
      key: '4',
      label: 'Administradores',
      icon: <FiUsers />,
      onClick: () => navigate('/users'),
    },
  ];

  return (
    <div style={{ width: !collapsed ? 256 : 80, justifyContent: 'flex-start' }}>
      <Menu
        defaultOpenKeys={['1']}
        defaultSelectedKeys={['1.1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        contentEditable={false}
      />
      <Button type="primary" onClick={toggleCollapsed} style={{ width: '100%' }}>
        {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </Button>
    </div>
  );
}
