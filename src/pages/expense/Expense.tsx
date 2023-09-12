import {
  ArrowRight,
  CalendarBlank,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUpDown,
  Circle,
  FileCsv,
  FilePdf,
  MagnifyingGlass,
  MicrosoftExcelLogo,
} from '@phosphor-icons/react';
import * as C from './Expense.styles';

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
import * as Tabs from '@radix-ui/react-tabs';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

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

function Expense() {
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
          <Tabs.Root defaultValue="tab1">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <div>
                <h4>Despesas por função</h4>
                <h3>Agrupada</h3>
              </div>

              <Tabs.List
                aria-label="Manage your account"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  borderRadius: 6,
                  backgroundColor: '#f9f9f9',
                  marginBottom: 14,
                }}>
                <Tabs.Trigger
                  value="tab1"
                  style={{
                    padding: 6,
                    background: '#e3e3e3',
                    width: '100%',
                    display: 'flex',
                    borderRadius: 8,
                    justifyContent: 'center',
                    fontSize: 14,
                  }}>
                  Todos
                </Tabs.Trigger>

                <Tabs.Trigger
                  value="tab2"
                  style={{
                    padding: 6,
                    width: '100%',
                    display: 'flex',
                    borderRadius: 8,
                    justifyContent: 'center',
                    background: 'transparent',
                    fontSize: 14,
                  }}>
                  Secretárias
                </Tabs.Trigger>

                <Tabs.Trigger
                  value="tab3"
                  style={{
                    padding: 6,
                    width: '100%',
                    display: 'flex',
                    borderRadius: 8,
                    justifyContent: 'center',
                    background: 'transparent',
                    fontSize: 14,
                  }}>
                  Gráfico
                </Tabs.Trigger>
              </Tabs.List>
            </div>

            <Tabs.Content value="tab2">
              <table>
                <tr>
                  <th>Descrição</th>
                  <th>Empenhado</th>
                  <th>Liquidado</th>
                  <th>Pago</th>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Saúde</Link>
                  </td>
                  <td>R$ 1.726.485.596</td>
                  <td>R$ 1.229.849.823</td>
                  <td>R$ 246.427.817</td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Educação</Link>
                  </td>
                  <td>R$ 1.421.113.221</td>
                  <td>R$ 1.390.256.634</td>
                  <td>R$ 1.512.112.981</td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Urbanismo</Link>
                  </td>
                  <td>R$ 1.201.939.920</td>
                  <td>R$ 444.770.838</td>
                  <td>R$ 337.411.387</td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Encargos</Link>
                  </td>
                  <td>R$ 392.670.623</td>
                  <td>R$ 348.586.100</td>
                  <td>R$ 331.267.085</td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Previdência Social</Link>
                  </td>
                  <td>R$ 421.704.213</td>
                  <td>R$ 299.615.909</td>
                  <td>R$ 246.427.817</td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Encargos Especiais</Link>
                  </td>
                  <td>R$ 331.267.085</td>
                  <td>R$ 444.770.838</td>
                  <td>R$ 337.411.387</td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes">Administração</Link>
                  </td>
                  <td>R$ 392.670.623,60 </td>
                  <td>R$ 348.586.100,69 </td>
                  <td>R$ 331.267.085,46</td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes">Comércio e Serviços</Link>
                  </td>
                  <td>R$ 239.696.793,31 </td>
                  <td>R$ 217.868.716,93 </td>
                  <td>R$ 214.929.253,70</td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes">Assistência Social</Link>
                  </td>
                  <td>R$ 191.561.651,26 </td>
                  <td>R$ 179.644.596,39 </td>
                  <td>R$ 174.690.624,48</td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes"> Comunicações</Link>
                  </td>
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
            </Tabs.Content>

            <Tabs.Content value="tab1">
              <C.FormSearch>
                <div>
                  <label htmlFor="confirmPassword" style={{ fontSize: 14 }}>
                    Orgão:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="Prefeitura Municipal de Japoatã"
                      style={{ width: '100%' }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <CaretDown color="#757575" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" style={{ fontSize: 14 }}>
                    Tipo:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="Pagamento Extraorçamentário"
                      style={{ width: '100%' }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <CaretDown color="#757575" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" style={{ fontSize: 14 }}>
                    Covid:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="Referente ao Covid19"
                      style={{ width: '100%' }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <CaretDown color="#757575" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" style={{ fontSize: 14 }}>
                    Ano:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="2023"
                      style={{ width: '100%' }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <CaretDown color="#757575" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" style={{ fontSize: 14 }}>
                    Credor/Fornecedor:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="Informe o credor"
                      style={{ width: '100%' }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <CaretDown color="#757575" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" style={{ fontSize: 14 }}>
                    Classificação:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="Informe a classificação"
                      style={{ width: '100%' }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <CaretDown color="#757575" />
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    gap: 10,
                  }}>
                  <button
                    style={{
                      width: '100%',
                      height: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                      backgroundColor: '#FAFAFA',
                      border: '1px solid #f2f2f2',
                    }}>
                    <FilePdf size={20} />
                  </button>
                  <button
                    style={{
                      width: '100%',
                      height: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                      backgroundColor: '#FAFAFA',
                      border: '1px solid #f2f2f2',
                    }}>
                    <FileCsv size={20} />
                  </button>
                  <button
                    style={{
                      width: '100%',
                      height: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                      backgroundColor: '#FAFAFA',
                      border: '1px solid #f2f2f2',
                    }}>
                    <MicrosoftExcelLogo size={20} />
                  </button>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    style={{ fontSize: 14, color: 'transparent' }}>
                    Classificação:
                  </label>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                    <input
                      type="text"
                      placeholder="Buscar"
                      value="Buscar"
                      style={{
                        width: '100%',
                        backgroundColor: '#306dff',
                        color: 'white',
                        cursor: 'pointer',
                      }}
                      disabled
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}>
                      <MagnifyingGlass color="white" />
                    </span>
                  </div>
                </div>
              </C.FormSearch>

              <table>
                <tr>
                  <th>Credor</th>
                  <th>Empenhado</th>
                  <th>Liquidado</th>
                  <th>Pago</th>
                  <th>Visualizar</th>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Saúde</Link>
                  </td>
                  <td>R$ 1.726.485.596</td>
                  <td>R$ 1.229.849.823</td>
                  <td>R$ 246.427.817</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Educação</Link>
                  </td>
                  <td>R$ 1.421.113.221</td>
                  <td>R$ 1.390.256.634</td>
                  <td>R$ 1.512.112.981</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Urbanismo</Link>
                  </td>
                  <td>R$ 1.201.939.920</td>
                  <td>R$ 444.770.838</td>
                  <td>R$ 337.411.387</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Encargos</Link>
                  </td>
                  <td>R$ 392.670.623</td>
                  <td>R$ 348.586.100</td>
                  <td>R$ 331.267.085</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Previdência Social</Link>
                  </td>
                  <td>R$ 421.704.213</td>
                  <td>R$ 299.615.909</td>
                  <td>R$ 246.427.817</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="detalhes">Encargos Especiais</Link>
                  </td>
                  <td>R$ 331.267.085</td>
                  <td>R$ 444.770.838</td>
                  <td>R$ 337.411.387</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes">Administração</Link>
                  </td>
                  <td>R$ 392.670.623,60 </td>
                  <td>R$ 348.586.100,69 </td>
                  <td>R$ 331.267.085,46</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes">Comércio e Serviços</Link>
                  </td>
                  <td>R$ 239.696.793,31 </td>
                  <td>R$ 217.868.716,93 </td>
                  <td>R$ 214.929.253,70</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes">Assistência Social</Link>
                  </td>
                  <td>R$ 191.561.651,26 </td>
                  <td>R$ 179.644.596,39 </td>
                  <td>R$ 174.690.624,48</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
                </tr>

                <tr>
                  <td>
                    <Link to="detalhes"> Comunicações</Link>
                  </td>
                  <td>R$ 102.391.633,98 </td>
                  <td>R$ 82.893.896,08 </td>
                  <td>R$ 81.766.827,92</td>
                  <td style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight />
                  </td>
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
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </C.Content>
    </C.Container>
  );
}

export default Expense;
