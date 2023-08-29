import {
  ArrowRight,
  CaretDown,
  CircleHalf,
  Translate,
} from '@phosphor-icons/react';
import * as C from './Frame.styles';

import { Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Modal from '../Modal';
import useModal from '../../hooks/modal';

type FrameProps = {
  children: React.ReactNode;
};

function Frame({ children }: FrameProps) {
  const { isShown, handleSwitch } = useModal();

  return (
    <C.Container>
      <Sidebar />

      <C.Content>
        <C.Header>
          <C.OptionBar>
            <Link to="sobre">O Municipio</Link>
            <Link to="guia">Guias</Link>
            <Link to="">Atalhos</Link>
          </C.OptionBar>

          <C.HeaderSection>
            <div style={{ position: 'relative' }} onClick={handleSwitch}>
              <input type="search" name="" placeholder="Pesquisar" id="" />
              <span
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}>
                Ctrl + K
              </span>
            </div>

            <Link to="acessibilidade">Acessibilidade</Link>

            <Link to="">
              <Translate size={18} />
              <CaretDown />
            </Link>
            <Link to="">
              <CircleHalf size={18} />
            </Link>

            <Link to="">Ir ao site</Link>
          </C.HeaderSection>
        </C.Header>

        <C.Group>
          <C.Main>
            <Breadcrumb />
            {children}
          </C.Main>

          <C.Utils>
            <header
              style={{
                position: 'sticky',
                display: 'flex',
                flexFlow: 'column',
                gap: 10,
                top: 30,
              }}>
              <p>Links Uteis</p>

              <Link to="">
                IBGE <ArrowRight size={12} />
              </Link>
              <Link to="">
                E-mail <ArrowRight size={12} />
              </Link>
              <Link to="">
                Banese <ArrowRight size={12} />
              </Link>
            </header>
          </C.Utils>
        </C.Group>
      </C.Content>

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        modalContent={
          <>
            <input
              type="text"
              placeholder="Pesquisar no transparência"
              autoFocus
            />
          </>
        }
      />
    </C.Container>
  );
}

export default Frame;
