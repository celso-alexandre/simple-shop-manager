import { useEffect, useMemo, useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { BiBarcode, BiListPlus, BiListUl } from 'react-icons/bi';
import { MdOutlineAddBusiness, MdOutlinePointOfSale } from 'react-icons/md';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { matchRoutes, useLocation } from 'react-router-dom';
import { FaRegClipboard } from 'react-icons/fa';

type MenuItem = Required<MenuProps>['items'][number];

export function SideMenu() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1360px)',
  });
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const toggleCollapsed = () => {
    setCollapsed((bol) => {
      return !bol;
    });
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
          label: <a href="/sales">Listar Vendas</a>,
          icon: <BiListUl />,
        },
        {
          key: '/sale',
          label: <a href="/sale">Nova Venda</a>,
          icon: <BiListPlus />,
        },
      ],
    },
    {
      key: '2',
      label: 'Ordens Compra',
      icon: <FaRegClipboard />,
      children: [
        {
          key: '/provider-orders',
          label: <a href="/provider-orders">Listar Ordens</a>,
          icon: <BiListUl />,
        },
        {
          key: '/provider-order',
          label: <a href="/provider-order">Nova Ordem</a>,
          icon: <BiListPlus />,
        },
      ],
    },
    {
      key: '3',
      label: 'Produtos',
      icon: <BiBarcode />,
      children: [
        {
          key: '/products',
          label: <a href="/products">Listar Produtos</a>,
          icon: <BiListUl />,
        },
        {
          key: '/product',
          label: <a href="/product">Novo Produto</a>,
          icon: <BiListPlus />,
        },
        {
          style: { visibility: 'hidden', height: 0 },
          key: '/product/:id',
        },
      ],
    },
    {
      key: '4',
      label: 'Fornecedores',
      icon: <MdOutlineAddBusiness />,
      children: [
        {
          key: '/providers',
          label: <a href="/providers">Listar Fornecedores</a>,
          icon: <BiListUl />,
        },
        {
          key: '/provider',
          label: <a href="/provider">Novo Fornecedor</a>,
          icon: <BiListPlus />,
        },
        {
          style: { visibility: 'hidden', height: 0 },
          key: '/provider/:id',
        },
      ],
    },
    // {
    //   key: '5',
    //   label: <a href="/users">Administradores</a>,
    //   icon: <FiUsers />,
    // },
  ];

  const routes = useMemo(() => {
    return items.reduce(
      (prev, cur) => {
        if (!(cur.key as string)?.includes('/') && !cur.children?.length)
          return prev;
        return [
          ...prev,
          ...(!cur.children
            ? [{ path: cur.key as string }]
            : cur.children
                ?.filter((child) => {
                  return child?.key;
                })
                ?.flatMap((child) => {
                  return {
                    path: child?.key as string,
                    parent: cur.key as string,
                  };
                }) || []),
        ];
      },
      [] as { path: string; parent?: string }[]
    );
  }, []);

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
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ width: '100%' }}>
        {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      </Button>
    </div>
  );
}
