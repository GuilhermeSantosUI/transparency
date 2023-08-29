import { ArrowElbowRight } from '@phosphor-icons/react';
import { Line } from 'react-chartjs-2';
import * as C from './Investment.styles';

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

import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: '#2bd45d',
      backgroundColor: '#89eca6',
      tension: 0.1,
    },
  ],
};

interface IInvestment {
  name: string;
  value: string;
}

function Investment({ name, value }: IInvestment) {
  return (
    <C.Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'space-between',
          }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}>
            <p>{name}</p>

            <span
              style={{
                display: 'flex',
                gap: 2,
                padding: 4,
                borderRadius: 4,
                backgroundColor: '#e8f9f1',
              }}>
              <p>2,15%</p>
              <ArrowElbowRight />
            </span>
          </div>

          <h2>{value}</h2>
        </div>

        <Line
          width={80}
          height={80}
          options={{
            responsive: false,
            plugins: {
              tooltip: {
                enabled: false,
              },
              legend: {
                display: false,
              },
              subtitle: {
                display: false,
              },
              title: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  color: 'transparent',
                },
                border: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                grid: {
                  color: 'transparent',
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
          data={data}
        />
      </div>

      <p>
        Investimento de <span>R$ 100.000</span> semana passada
      </p>
    </C.Container>
  );
}

export default Investment;
