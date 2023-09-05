import {
  CalendarBlank,
  Cardholder,
  CurrencyDollar,
} from '@phosphor-icons/react';
import * as C from './Home.styles';
import { Banner, Investment, Module } from './components';

function Home() {
  return (
    <C.Container>
      <div>
        <h3>Bem-vindo ao novo</h3>
        <h2>Portal da transparência</h2>
      </div>

      <C.Content>
        <Banner />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <div>
            <h3>Balanço total</h3>
            <h2>R$ 5.216.403.750,45</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <input type="text" placeholder="Jan 1 2022 - Jan 1 2023" disabled />
            <span
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
              }}>
              <CalendarBlank color="#757575" />
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <Investment name="Educação" value="R$ 1.526.355.905,42" />
          <Investment name="Assistencia Social" value="R$ 194.365.729,12" />
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <Investment name="Saúde" value="R$ 1.740.044.328,11" />
          <Investment name="Urbanismo" value="R$ 1.455.637.791,80" />
        </div>

        <h3>Módulos</h3>

        <C.GridModules>
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
        </C.GridModules>
      </C.Content>
    </C.Container>
  );
}

export default Home;
