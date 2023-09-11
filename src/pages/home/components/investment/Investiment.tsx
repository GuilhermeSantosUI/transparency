import { IconProps } from '@phosphor-icons/react';
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
import Modal from '../../../../components/Modal';
import useModal from '../../../../hooks/modal';
import Details from './components/Details';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface IInvestment {
  icon: React.ComponentType<IconProps>;
  name: string;
  value: string;
  data: {
    labels: string[];
    datasets: {
      data: number[];
      borderColor: string;
      backgroundColor: string;
      tension: number;
    }[];
  };
}

function Investment({ icon: Icon, name, value, data }: IInvestment) {
  const { isShown, handleSwitch } = useModal();

  return (
    <>
      <C.Container onClick={handleSwitch}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <Line
            width={150}
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

        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'space-between',
                gap: 4,
              }}>
              {Icon && <Icon size={22} />}
              <p>{name}</p>
            </div>

            <h2>{value}</h2>
          </div>
        </div>
      </C.Container>

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        modalContent={<Details name={name} />}
      />
    </>
  );
}

export default Investment;
