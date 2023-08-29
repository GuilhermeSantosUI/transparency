import {
  ChartBar,
  FileArchive,
  FileX,
  HouseSimple,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import * as C from './Esic.styles';

function Esic() {
  return (
    <C.Container>
      <h3>e-SIC</h3>
      <h2>Sistema Eletrônico de Informação ao Cidadão</h2>
      <br />

      <p>
        O sistema possibilita que qualquer cidadão conectado à internet possa
        fazer uso do serviço, em qualquer lugar e a qualquer hora.
      </p>

      <br />

      <C.GridModules>
        <Link to="">
          <ChartBar size={20} />

          <p>
            <b>Relatorio Estatístico:</b> Relatório estatístico do serviço de
            informação ao cidadão referente ao atendimento
          </p>
        </Link>

        <Link to="">
          <HouseSimple size={20} />

          <div>
            <p>
              <b>Sic Presencial:</b> Requerimento presencial do e-SIC
            </p>
          </div>
        </Link>

        <Link to="">
          <FileArchive size={20} />

          <p>
            <b>Relatório informações classificadas:</b> Resultado do relatório
            de informações classificadas
          </p>
        </Link>

        <Link to="">
          <FileX size={20} />

          <p>
            <b>Relatório informações desclassificadas:</b> Resultado do
            relatório de informações desclassificadas
          </p>
        </Link>
      </C.GridModules>
    </C.Container>
  );
}

export default Esic;
