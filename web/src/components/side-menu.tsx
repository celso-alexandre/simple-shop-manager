import { useEffect, useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { FiUsers } from 'react-icons/fi';
import { BiBarcode, BiListPlus, BiListUl } from 'react-icons/bi';
import { MdOutlineAddBusiness, MdOutlinePointOfSale } from 'react-icons/md';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { matchRoutes, useLocation, Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

export function SideMenu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1079px)',
  });
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
          label: <Link to="/sales">Listar Vendas</Link>,
          icon: <BiListUl />,
        },
        {
          key: '/sale',
          label: <Link to="/sale">Nova Venda</Link>,
          icon: <BiListPlus />,
        },
      ],
    },
    {
      key: '2',
      label: 'Produtos',
      icon: <BiBarcode />,
      children: [
        {
          key: '/products',
          label: <Link to="/products">Listar Produtos</Link>,
          icon: <BiListUl />,
        },
        {
          key: '/product',
          label: <Link to="/product">Novo Produto</Link>,
          icon: <BiListPlus />,
        },
        {
          style: { visibility: 'hidden', height: 0 },
          key: '/product/:id',
        },
      ],
    },
    {
      key: '3',
      label: 'Fornecedores',
      icon: <MdOutlineAddBusiness />,
      children: [
        {
          key: '/providers',
          label: <Link to="/providers">Listar Fornecedores</Link>,
          icon: <BiListUl />,
        },
        {
          key: '/provider',
          label: <Link to="/provider">Novo Fornecedor</Link>,
          icon: <BiListPlus />,
        },
        {
          style: { visibility: 'hidden', height: 0 },
          key: '/provider/:id',
        },
      ],
    },
    {
      key: '/users',
      label: <Link to="/users">Administradores</Link>,
      icon: <FiUsers />,
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
