import {
  CalendarBlank,
  Cardholder,
  CurrencyDollar,
  GraduationCap,
  Heartbeat,
  Tree,
  UsersThree,
} from '@phosphor-icons/react';

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

import * as C from '../home/Home.styles';
import { Banner, Investment, Module } from '../home/components';

function Legislacao() {
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

        <h3>Módulos</h3>

        <C.GridModules>
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
        </C.GridModules>
      </C.Content>
    </C.Container>
  );
}

export default Legislacao;
