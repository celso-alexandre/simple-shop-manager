import { Route, Routes } from 'react-router-dom';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import { SideMenu } from './components/side-menu';
import { NoMatch } from './not-found';
import { Products } from './products';
import { Providers } from './providers';
import { Sales } from './sales';

dayjs.extend(LocalizedFormat);

export function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />

      <div style={{ justifyContent: 'flex-end', marginLeft: '30px' }}>
        <Routes>
          <Route path="/" element={<Sales />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}
