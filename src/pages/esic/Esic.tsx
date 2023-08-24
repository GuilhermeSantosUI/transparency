import { Link } from 'react-router-dom';
import * as C from './Esic.styles';
import { File, HouseSimple } from '@phosphor-icons/react';

function Esic() {
  return (
    <C.Container>
      <h3>e-SIC</h3>
      <h2>Sistema Eletrônico de Informação ao Cidadão</h2>
      <p>
        O sistema possibilita que qualquer cidadão conectado à internet possa{' '}
        <br />
        fazer uso do serviço, em qualquer lugar e a qualquer hora.
      </p>

      <br />

      <Link to="">
        <File size={20} />

        <div>
          <h4>Relatorio Estatístico</h4>
          <p>
            Relatório estatístico do serviço de informação ao cidadão referente
            ao atendimento
          </p>
        </div>
      </Link>

      <Link to="">
        <HouseSimple size={20} />

        <div>
          <h4>Sic Presencial</h4>
          <p>Requerimento presencial do e-SIC</p>
        </div>
      </Link>

      <Link to="">
        <File size={20} />

        <div>
          <h4>Relatório informações classificadas</h4>
          <p>Resultado do relatório de informações classificadas</p>
        </div>
      </Link>

      <Link to="">
        <File size={20} />

        <div>
          <h4>Relatório informações desclassificadas</h4>
          <p>Resultado do relatório de informações desclassificadas</p>
        </div>
      </Link>
    </C.Container>
  );
}

export default Esic;
