import { useEffect, useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { FiUsers } from 'react-icons/fi';
import { BiBarcode, BiListPlus, BiListUl } from 'react-icons/bi';
import { MdOutlineAddBusiness, MdOutlinePointOfSale } from 'react-icons/md';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, matchRoutes, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

export function SideMenu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1079px)',
  });
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

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
          key: '/sales',
          label: 'Listar Vendas',
          icon: <BiListUl />,
          onClick: () => navigate('/sales'),
        },
        {
          key: '/sale',
          label: 'Nova Venda',
          icon: <BiListPlus />,
          onClick: () => navigate('/sale'),
        },
      ],
    },
    {
      key: '/products',
      label: 'Produtos',
      icon: <BiBarcode />,
      onClick: () => navigate('/products'),
    },
    {
      key: '3',
      label: 'Fornecedores',
      icon: <MdOutlineAddBusiness />,
      children: [
        {
          key: '/providers',
          label: 'Listar Fornecedores',
          icon: <BiListUl />,
          onClick: () => navigate('/providers'),
        },
        {
          key: '/provider',
          label: 'Novo Fornecedor',
          icon: <BiListUl />,
          onClick: () => navigate('/provider'),
        },
        {
          style: { visibility: 'hidden', height: 0 },
          key: '/provider/:id',
        },
      ],
    },
    {
      key: '/users',
      label: 'Administradores',
      icon: <FiUsers />,
      onClick: () => navigate('/users'),
    },
  ];

  const routes = useMemo(
    () =>
      items.reduce((prev, cur) => {
        if (!(cur.key as string)?.includes('/') && !cur.children?.length) return prev;
        return [
          ...prev,
          ...(!cur.children
            ? [{ path: cur.key as string }]
            : cur.children
                ?.filter(child => child?.key)
                ?.flatMap(child => ({ path: child?.key as string, parent: cur.key as string })) || []),
        ];
      }, [] as { path: string; parent?: string }[]),
    []
  );

  const matches = matchRoutes(routes, location);
  const { route } = matches?.[0] || {};

  return (
    <div style={{ width: !collapsed ? 256 : 80, justifyContent: 'flex-start' }}>
      <Menu
        defaultOpenKeys={[route?.parent ?? '1']}
        defaultSelectedKeys={[route?.path ?? '/sales']}
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
