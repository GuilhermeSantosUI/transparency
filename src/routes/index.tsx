import { Routes as RRDRoutes, Route } from 'react-router-dom';
import { Frame } from '../components';
import {
  About,
  Accessibility,
  Esic,
  Expense,
  Guide,
  Home,
  Recipe,
} from '../pages';

function Routes() {
  return (
    <Frame>
      <RRDRoutes>
        {/*  <Route path="/" element={<Navigate replace to="home" />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="guia" element={<Guide />} />

        <Route path="acessibilidade" element={<Accessibility />} />

        <Route path="despesa" element={<Expense />} />
        <Route path="receita" element={<Recipe />} />
        <Route path="esic" element={<Esic />} />
      </RRDRoutes>
    </Frame>
  );
}

export default Routes;
