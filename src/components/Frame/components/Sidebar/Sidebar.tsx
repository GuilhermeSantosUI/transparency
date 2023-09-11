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

import { NavLink } from 'react-router-dom';
import * as C from './Sidebar.styles';

function Sidebar() {
  return (
    <C.Container>
      <C.Content>
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
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <HouseSimple size={18} /> Ínicio
          </NavLink>

          <NavLink
            to="/licitacoes"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <CurrencyDollar size={18} /> Licitações
          </NavLink>

          <NavLink
            to="/legislacao"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <Bank size={18} /> Legislação
          </NavLink>

          <NavLink
            to="/esic"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <AppWindow size={18} /> eSIC
          </NavLink>

          <NavLink
            to="/lgpd"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <Gavel size={18} /> LGPD
          </NavLink>

          <NavLink
            to="/estrutura-organizacional"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <HardDrives size={18} /> Estrutura <br /> Organizacional
          </NavLink>
        </div>

        <p>Mais opções</p>

        <div>
          <NavLink
            to="/pesquisa-satisfacao"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <Smiley size={18} /> Pesquisa de
            <br /> satisfação
          </NavLink>

          <NavLink
            to="/perguntas-frequentes"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }>
            <Question size={18} /> Perguntas <br /> Frequentes
          </NavLink>
        </div>
      </C.Content>
      <div style={{ textAlign: 'center' }}>
        <p>Desenvolvido por Ágape Sistemas</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            borderRadius: 6,
            backgroundColor: '#f9f9f9',
          }}>
          <div
            style={{
              padding: 6,
              background: '#e3e3e3',
              width: '100%',
              display: 'flex',
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            Claro
          </div>
          <div
            style={{
              padding: 6,
              width: '100%',
              display: 'flex',
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            Escuro
          </div>
        </div>
      </div>
    </C.Container>
  );
}

export default Sidebar;
