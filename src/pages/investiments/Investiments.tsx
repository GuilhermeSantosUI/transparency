import { Chart } from 'react-google-charts';

const data = [
  ['City', '2010 Population', '2000 Population'],
  ['New York City, NY', 8175000, 8008000],
  ['Los Angeles, CA', 3792000, 3694000],
  ['Chicago, IL', 2695000, 2896000],
  ['Houston, TX', 2099000, 1953000],
  ['Philadelphia, PA', 1526000, 1517000],
];

function Investiments() {
  return (
    <div>
      <h3>
        Valores de fundos por <br />
        programas operacionais
      </h3>

      <Chart chartType="BarChart" width="400px" height="400px" data={data} />
    </div>
  );
}

export default Investiments;
