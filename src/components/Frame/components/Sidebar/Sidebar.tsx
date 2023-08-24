import {
  AppWindow,
  Bank,
  CurrencyDollar,
  Gavel,
  HardDrives,
  HouseSimple,
  Sidebar as IconSide,
  Question,
  Smiley,
} from '@phosphor-icons/react';

import { Link } from 'react-router-dom';

import * as C from './Sidebar.styles';

function Sidebar() {
  return (
    <C.Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <img
          src="https://homologacao.sitesagapesistemas.com.br/upload/entidades/17/arq_85b5d9bafb4d3b35a6047bd4557daf58-04-09-2017.png"
          alt="logo da empresa"
        />

        <IconSide size={20} />
      </div>

      <p>Transparência</p>

      <div>
        <Link to="">
          <HouseSimple size={18} /> Ínicio
        </Link>

        <Link to="">
          <CurrencyDollar size={18} /> Licitações
        </Link>

        <Link to="">
          <Bank size={18} /> Legislação
        </Link>

        <Link to="">
          <AppWindow size={18} /> eSIC
        </Link>

        <Link to="">
          <Gavel size={18} /> LGPD
        </Link>

        <Link to="">
          <HardDrives size={18} /> Estrutura <br /> Organizacional
        </Link>
      </div>

      <p>Mais opções</p>

      <div>
        <Link to="">
          <Smiley size={18} /> Pesquisa de
          <br /> satisfação
        </Link>

        <Link to="">
          <Question size={18} /> Perguntas <br /> Frequentes
        </Link>
      </div>

      <p>Desenvolvido por Ágape Sistemas</p>
    </C.Container>
  );
}

export default Sidebar;
