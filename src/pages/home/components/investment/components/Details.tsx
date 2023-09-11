import {
  ArrowUp,
  ArrowUpRight,
  ChartDonut,
  Circle,
} from '@phosphor-icons/react';
import * as C from './Details.styles';

import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 10, max: 100 })),
      backgroundColor: '#AFECEF',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 10, max: 100 })),
      backgroundColor: '#105DFB',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.number.int({ min: 10, max: 100 })),
      backgroundColor: '#6EC787',
    },
  ],
};

interface IDetails {
  name: string;
}

function Details({ name }: IDetails) {
  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
            <C.ChartIcon>
              <ChartDonut size={16} />
            </C.ChartIcon>

            <h4>Investimentos: {name} </h4>
          </div>
        </C.Header>

        <C.Main>
          <h2>Visão Geral</h2>

          <C.RevenueDetails>
            <C.Details>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <p>Empenhado</p>
                <Circle color="#AFECEF" weight="fill" size={10} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h3>R$ +1,245 Bi</h3>

                <C.Span>
                  <ArrowUp size={12} />
                  <p>1,7%</p>
                </C.Span>
              </div>
            </C.Details>

            <C.Details>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <p>Liquidado</p>
                <Circle color="#105DFB" weight="fill" size={10} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h3>R$ +1,245 Bi</h3>

                <C.Span>
                  <ArrowUp size={12} />
                  <p>1,7%</p>
                </C.Span>
              </div>
            </C.Details>

            <C.Details>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <p>Pago</p>
                <Circle color="#6EC787" weight="fill" size={10} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h3>R$ +1,245 Bi</h3>

                <C.Span>
                  <ArrowUp size={12} />
                  <p>1,7%</p>
                </C.Span>
              </div>
            </C.Details>
          </C.RevenueDetails>

          <h4>Gráfico</h4>

          <br />

          <Bar
            width={640}
            height={280}
            options={{
              responsive: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    color: '#dfe0e637',
                  },
                  border: {
                    display: false,
                  },
                  ticks: {
                    font: {
                      family: 'Bricolage Grotesque',
                    },
                  },
                },
                y: {
                  grid: {
                    color: '#dfe0e637',
                  },
                  border: {
                    display: false,
                  },
                  ticks: {
                    font: {
                      family: 'Bricolage Grotesque',
                    },
                  },
                },
              },
              elements: {
                bar: {
                  borderRadius: 4,
                },
              },
            }}
            data={data}
          />
        </C.Main>
      </C.Content>

      <C.Aside>
        <div style={{ display: 'flex', flexFlow: 'column', gap: 10 }}>
          <div style={{ display: 'flex', flexFlow: 'column', gap: 4 }}>
            <h4>Ultima atualização</h4>
            <p>Detalhes referente aos investimentos em: {name}</p>
          </div>
        </div>

        <button
          style={{
            padding: 10,
            width: '100%',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: '1px solid #e3e3e3',
          }}>
          Mais detalhes
          <ArrowUpRight size={16} />
        </button>
      </C.Aside>
    </C.Container>
  );
}

export default Details;
