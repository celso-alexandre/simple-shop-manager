import { Route, Routes } from 'react-router-dom';
import { SideMenu } from './components/side-menu';
import { NoMatch } from './not-found';

export function App() {
  return (
    <div style={{ display: 'flex' }}>
      <SideMenu />

      <div style={{ justifyContent: 'flex-end', marginLeft: '30px' }}>
        <Routes>
          {/* <Route index element={<InvestmentGoals />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}
