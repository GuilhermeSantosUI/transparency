import {
  CalendarBlank,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
  CaretUpDown,
  Circle,
  MagnifyingGlassPlus,
} from '@phosphor-icons/react';

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
  ],
};

import * as C from './Recipe.styles';
import { Link } from 'react-router-dom';

function Recipe() {
  return (
    <C.Container>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <h3>Total previsto</h3>
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
                <p>Realizado</p>
                <Circle color="#105DFB" weight="fill" size={10} />
              </div>
              <h3>R$ 5.671.261.959</h3>
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
                borderRadius: 6,
              },
            },
          }}
        />

        <div style={{ padding: '32px 0' }}>
          <C.ContentHeader>
            <div>
              <h4>Receita por</h4>
              <h3>Categoria Econômica</h3>
            </div>
          </C.ContentHeader>

          <table>
            <tr>
              <th>Categoria Economica</th>
              <th>Previsto</th>
              <th>Realizado</th>
            </tr>
            <tr>
              <td>
                <Link to="detalhes">Receitas Correntes</Link>
              </td>
              <td>R$ 1.726.485.596</td>
              <td>R$ 246.427.817</td>
            </tr>
            <tr>
              <td>
                <Link to="detalhes">Receitas de Capital</Link>
              </td>
              <td>R$ 1.421.113.221</td>
              <td>R$ 1.390.256.634</td>
            </tr>
            <tr>
              <td>
                <Link to="detalhes">
                  Receitas Correntes Intra Orçamentárias
                </Link>
              </td>
              <td>R$ 444.770.838</td>
              <td>R$ 337.411.387</td>
            </tr>
            <tr>
              <td>
                <Link to="detalhes">Rec. Cap. Intra Orçamentárias</Link>
              </td>
              <td>R$ 392.670.623</td>
              <td>R$ 331.267.085</td>
            </tr>
            <tr>
              <td>
                <Link to="detalhes">
                  Recursos Arrecadados em Exercícios Anteriores
                </Link>
              </td>
              <td>R$ 421.704.213</td>
              <td>R$ 246.427.817</td>
            </tr>
            <tr>
              <td>
                <Link to="detalhes">Encargos Especiais</Link>
              </td>
              <td>R$ 331.267.085</td>
              <td>R$ 337.411.387</td>
            </tr>

            <tr>
              <td>
                <Link to="detalhes">Administração</Link>
              </td>
              <td>R$ 392.670.623,60 </td>
              <td>R$ 348.586.100,69 </td>
            </tr>

            <tr>
              <td>
                <Link to="detalhes">Comércio e Serviços</Link>
              </td>
              <td>R$ 239.696.793,31 </td>
              <td>R$ 217.868.716,93 </td>
            </tr>

            <tr>
              <td>
                <Link to="detalhes">Assistência Social</Link>
              </td>
              <td>R$ 179.644.596,39 </td>
              <td>R$ 174.690.624,48</td>
            </tr>

            <tr>
              <td>
                <Link to="detalhes">Comunicações</Link>
              </td>
              <td>R$ 102.391.633,98 </td>
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

export default Recipe;
