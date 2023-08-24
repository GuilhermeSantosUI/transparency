import { Cardholder, CurrencyDollar } from '@phosphor-icons/react';
import * as C from './Home.styles';
import { Module } from './components';

function Home() {
  return (
    <C.Container>
      <h3>Investimentos do município</h3>
      <h2>R$ 4.738.161.754</h2>

      <C.Content>
        <h3>Modulos</h3>

        <C.GridModules>
          <Module to="/despesa" title="Despesa" icon={Cardholder} />
          <Module to="/receita" title="Receita" icon={CurrencyDollar} />
        </C.GridModules>
      </C.Content>
    </C.Container>
  );
}

export default Home;
