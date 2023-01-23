import { Route, Routes } from 'react-router-dom';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
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

dayjs.extend(LocalizedFormat);

export function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />

      <div style={{ justifyContent: 'flex-end', marginLeft: '30px', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Sales />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales" element={<SaleInsert />} />
          <Route path="/sales" element={<SaleEdit />} />

          <Route path="/providers" element={<Providers />} />
          <Route path="/provider" element={<ProviderInsert />} />
          <Route path="/provider/:id" element={<ProviderEdit />} />

          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<ProductInsert />} />
          <Route path="/product/:id" element={<ProductEdit />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}
