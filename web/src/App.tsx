import { Route, Routes } from 'react-router-dom';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { SideMenu } from './components/side-menu';
import { NoMatch } from './not-found';
import { Products } from './products';
import { Providers } from './providers';
import { Sales } from './sales';
import { ProviderInsert } from './providers/insert';
import { ProviderEdit } from './providers/edit';
import { ProductInsert } from './products/insert';
import { ProductEdit } from './products/edit';
import { SaleInsert } from './sales/insert';
import { SaleEdit } from './sales/edit';
import { ProviderOrderInsert } from './provider-orders/insert';
import { ProviderOrders } from './provider-orders';
import { ProviderOrderEdit } from './provider-orders/edit';

import('dayjs/locale/pt-br');

dayjs.extend(localizedFormat);
dayjs.extend(localeData);
dayjs.locale('pt-br');

export function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />

      <div
        style={{
          justifyContent: 'flex-end',
          marginLeft: '30px',
          width: '100%',
        }}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Routes>
            <Route path="/" element={<Sales />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sale" element={<SaleInsert />} />
            <Route path="/sale/:id" element={<SaleEdit />} />

            <Route path="/provider-orders" element={<ProviderOrders />} />
            <Route path="/provider-order" element={<ProviderOrderInsert />} />
            <Route path="/provider-order/:id" element={<ProviderOrderEdit />} />

            <Route path="/providers" element={<Providers />} />
            <Route path="/provider" element={<ProviderInsert />} />
            <Route path="/provider/:id" element={<ProviderEdit />} />

            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<ProductInsert />} />
            <Route path="/product/:id" element={<ProductEdit />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </QueryParamProvider>
      </div>
    </div>
  );
}
