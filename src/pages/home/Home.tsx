import {
  CalendarBlank,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
  CaretUpDown,
  Circle,
} from '@phosphor-icons/react';
import * as C from './Home.styles';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { faker } from '@faker-js/faker';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['2020', '2021', '2022', '2023'];

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

function Home() {
  return (
    <C.Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <h3>Total empenhado</h3>
        <Circle color="#AFECEF" weight="fill" size={14} />
      </div>
      <h2>R$ 7.012.605.012</h2>

      <C.Content>
        <C.ContentHeader>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 64,
              padding: '32px 0',
            }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <p>Liquidado</p>
                <Circle color="#105DFB" weight="fill" size={10} />
              </div>
              <h3>R$ 5.671.261.959</h3>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <p>Pago</p>
                <Circle color="#6EC787" weight="fill" size={10} />
              </div>
              <h3>R$ 5.493.228.535</h3>
            </div>
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
        </C.ContentHeader>

        <Bar
          data={data}
          width={780}
          height={400}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
                labels: {
                  font: {
                    family: 'Bricolage Grotesque',
                  },
                },
              },
              title: {
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
              },
              y: {
                grid: {
                  color: '#dfe0e637',
                },
                border: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              bar: {
                borderRadius: 6,
              },
            },
          }}
        />

        <div style={{ padding: '32px 0' }}>
          <h3>Despesas por função</h3>
          <h2>Agrupada</h2>

          <table>
            <tr>
              <th>Descrição</th>
              <th>Empenhado</th>
              <th>Liquidado</th>
              <th>Pago</th>
            </tr>
            <tr>
              <td>Saúde</td>
              <td>R$ 1.726.485.596</td>
              <td>R$ 1.229.849.823</td>
              <td>R$ 246.427.817</td>
            </tr>
            <tr>
              <td>Educação</td>
              <td>R$ 1.421.113.221</td>
              <td>R$ 1.390.256.634</td>
              <td>R$ 1.512.112.981</td>
            </tr>
            <tr>
              <td>Urbanismo</td>
              <td>R$ 1.201.939.920</td>
              <td>R$ 444.770.838</td>
              <td>R$ 337.411.387</td>
            </tr>
            <tr>
              <td>Encargos</td>
              <td>R$ 392.670.623</td>
              <td>R$ 348.586.100</td>
              <td>R$ 331.267.085</td>
            </tr>
            <tr>
              <td>Previdência Social</td>
              <td>R$ 421.704.213</td>
              <td>R$ 299.615.909</td>
              <td>R$ 246.427.817</td>
            </tr>
            <tr>
              <td>Encargos Especiais</td>
              <td>R$ 331.267.085</td>
              <td>R$ 444.770.838</td>
              <td>R$ 337.411.387</td>
            </tr>

            <tr>
              <td>Administração</td>
              <td>R$ 392.670.623,60 </td>
              <td>R$ 348.586.100,69 </td>
              <td>R$ 331.267.085,46</td>
            </tr>

            <tr>
              <td>Comércio e Serviços</td>
              <td>R$ 239.696.793,31 </td>
              <td>R$ 217.868.716,93 </td>
              <td>R$ 214.929.253,70</td>
            </tr>

            <tr>
              <td>Assistência Social</td>
              <td>R$ 191.561.651,26 </td>
              <td>R$ 179.644.596,39 </td>
              <td>R$ 174.690.624,48</td>
            </tr>

            <tr>
              <td> Comunicações</td>
              <td>R$ 102.391.633,98 </td>
              <td>R$ 82.893.896,08 </td>
              <td>R$ 81.766.827,92</td>
            </tr>
          </table>

          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <p>0 de 10 linha(s) selecionadas</p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
              <p>Linhas por pagina</p>

              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="10"
                  style={{ width: 60 }}
                  disabled
                />
                <span
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}>
                  <CaretUpDown color="#757575" />
                </span>
              </div>

              <p>Pagina 1 de 4</p>

              <button
                style={{
                  padding: 10,
                  display: 'flex',
                  borderRadius: 6,
                }}>
                <CaretDoubleLeft color="#757575" />
              </button>

              <button
                style={{
                  padding: 10,
                  display: 'flex',
                  borderRadius: 6,
                }}>
                <CaretLeft color="#757575" />
              </button>

              <button
                style={{
                  padding: 10,
                  display: 'flex',
                  borderRadius: 6,
                }}>
                <CaretRight color="#757575" />
              </button>

              <button
                style={{
                  padding: 10,
                  display: 'flex',
                  borderRadius: 6,
                }}>
                <CaretDoubleRight color="#757575" />
              </button>
            </div>
          </div>
        </div>
      </C.Content>
    </C.Container>
  );
}

export default Home;
