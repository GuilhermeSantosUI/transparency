import {
  Bank,
  Calculator,
  CalendarBlank,
  Cardholder,
  ChartLine,
  CurrencyDollar,
  Gavel,
  GraduationCap,
  Handshake,
  Heartbeat,
  Pen,
  Syringe,
  Tree,
  UsersThree,
} from '@phosphor-icons/react';
import * as C from './Home.styles';
import { Banner, Investment, Module } from './components';

import { faker } from '@faker-js/faker';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data1 = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: '#fff',
      backgroundColor: '#e3e3e3',
      tension: 0.1,
    },
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: '#fff',
      backgroundColor: '#e3e3e3',
      tension: 0.1,
    },
  ],
};

const data3 = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: '#fff',
      backgroundColor: '#e3e3e3',
      tension: 0.1,
    },
  ],
};

const data4 = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: '#fff',
      backgroundColor: '#e3e3e3',
      tension: 0.1,
    },
  ],
};

function Home() {
  return (
    <C.Container>
      <Banner />
      <C.Content>
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
          <Investment
            icon={GraduationCap}
            name="Educação"
            value="R$ +1.5 Bi"
            data={data1}
          />

          <Investment
            icon={UsersThree}
            name="Assistência Social"
            value="R$ +200 Mil"
            data={data2}
          />

          <Investment
            icon={Heartbeat}
            name="Saúde"
            value="R$ +1.7 Bi"
            data={data3}
          />

          <Investment
            icon={Tree}
            name="Urbanismo"
            value="R$ +1.5 Bi"
            data={data4}
          />
        </div>

        <h3>Combate à Covid19</h3>

        <C.GridModules>
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
          <Module to="/licitacoes" title="Licitações" icon={Gavel} />
          <Module to="/licitacoes" title="Contratos" icon={Handshake} />
          <Module to="/licitacoes" title="Legislação" icon={Bank} />
          <Module
            to="/licitacoes"
            title="Combate Covid (Vacinação)"
            icon={Syringe}
          />
        </C.GridModules>

        <h3>Execução Orçamentária</h3>

        <C.GridModules>
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
          <Module to="/licitacoes" title="Empenhos" icon={Gavel} />
          <Module to="/licitacoes" title="Licitações" icon={Handshake} />
          <Module to="/licitacoes" title="Pagamentos" icon={Bank} />
          <Module
            to="/licitacoes"
            title="Plano de ação (Siafic)"
            icon={Syringe}
          />
        </C.GridModules>

        <h3>Orçamento</h3>

        <C.GridModules>
          <Module to="/despesa" title="PPA" icon={Pen} />
          <Module to="/receita" title="LDO" icon={ChartLine} />
          <Module to="/licitacoes" title="LOA" icon={Calculator} />
        </C.GridModules>
      </C.Content>
    </C.Container>
  );
}

export default Home;
