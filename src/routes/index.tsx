import { Navigate, Routes as RRDRoutes, Route } from 'react-router-dom';
import { Frame } from '../components';
import { About, Accessibility, Guide, Home, Investiments } from '../pages';

function Routes() {
  return (
    <Frame>
      <RRDRoutes>
        <Route path="/" element={<Navigate replace to="home" />} />

        <Route path="home" element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="guia" element={<Guide />} />

        <Route path="acessibilidade" element={<Accessibility />} />

        <Route path="investimentos" element={<Investiments />} />
      </RRDRoutes>
    </Frame>
  );
}

export default Routes;
