import {
  ArrowRight,
  ArrowUpRight,
  CalendarBlank,
  Cardholder,
  CaretDown,
  CircleHalf,
  CurrencyDollar,
  File,
  HandFist,
  Handshake,
  Translate,
} from '@phosphor-icons/react';
import { useRef } from 'react';
import * as C from './Frame.styles';

import * as Tabs from '@radix-ui/react-tabs';

import { Link } from 'react-router-dom';
import useModal from '../../hooks/modal';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Modal from '../Modal';
import Sidebar from './components/Sidebar/Sidebar';
import { NavLink } from 'react-router-dom';
import Footer from './components/footer/Footer';

type FrameProps = {
  children: React.ReactNode;
};

function Frame({ children }: FrameProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isShown, handleSwitch } = useModal();

  /* const keyDownHandler = (e: KeyboardEvent) => {
    e.preventDefault();
s
    if (e.altKey && e.key === 'k') {
      inputRef.current?.click();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
  }); */

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
              <input
                ref={inputRef}
                type="search"
                name=""
                placeholder="Pesquisar"
                id=""
              />
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
            <Link to="">
              <HandFist size={18} />
            </Link>

            <Link to="">Ir ao site</Link>
          </C.HeaderSection>
        </C.Header>

        <C.Group>
          <C.Main>
            <Breadcrumb />
            {children}
            <Footer />
          </C.Main>

          <C.Utils>
            <div
              style={{
                position: 'sticky',
                top: 20,
                display: 'flex',
                flexFlow: 'column',
                gap: 16,
              }}>
              <header
                style={{
                  display: 'flex',
                  flexFlow: 'column',
                  gap: 10,
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

              <header
                style={{
                  display: 'flex',
                  flexFlow: 'column',
                  gap: 10,
                }}>
                <div
                  style={{
                    height: 35,
                    display: 'flex',
                    flexFlow: 'column',
                  }}>
                  <p>Acesso Rapido</p>

                  <Tabs.Root defaultValue="tab1">
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
                        Modulos
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
                        e-SIC
                      </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="tab1">
                      <NavLink
                        to="/despesa"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? 'pending'
                            : isActive
                            ? 'teste active'
                            : 'teste'
                        }>
                        <Cardholder size={18} /> Despesa
                      </NavLink>

                      <NavLink
                        to="/receita"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? 'pending'
                            : isActive
                            ? 'teste active'
                            : 'teste'
                        }>
                        <CurrencyDollar size={18} /> Receita
                      </NavLink>

                      <NavLink
                        to="/contratos"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? 'pending'
                            : isActive
                            ? 'teste active'
                            : 'teste'
                        }>
                        <Handshake size={18} /> Contratos
                      </NavLink>

                      <NavLink
                        to="/diario-oficial"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? 'pending'
                            : isActive
                            ? 'teste active'
                            : 'teste'
                        }>
                        <CalendarBlank size={18} /> Diario oficial
                      </NavLink>

                      <NavLink
                        to="/folha-pagamento"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? 'pending'
                            : isActive
                            ? 'teste active'
                            : 'teste'
                        }>
                        <File size={18} /> Folha de pagamento
                      </NavLink>
                      <br />

                      <p>
                        Os modulos mais acessados são calculados globalmente,
                        não por individuo.
                      </p>
                    </Tabs.Content>

                    <Tabs.Content value="tab2">
                      <div
                        style={{
                          display: 'flex',
                          flexFlow: 'column',
                          gap: 10,
                        }}>
                        <div>
                          <label htmlFor="newPassword">E-mail</label> <br />
                          <input
                            id="newPassword"
                            placeholder="Insira aqui seu E-mail"
                            type="email"
                          />
                        </div>

                        <div>
                          <label htmlFor="confirmPassword">Senha</label> <br />
                          <input
                            id="confirmPassword"
                            placeholder="Insira aqui sua senha"
                            type="password"
                          />
                          <a
                            style={{
                              fontSize: 14,
                              cursor: 'pointer',
                            }}>
                            Esqueci minha senha
                          </a>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexFlow: 'column',
                            gap: 6,
                          }}>
                          <button
                            style={{
                              padding: 10,
                              width: '100%',
                              borderRadius: 6,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              backgroundColor: '#306dff',
                              border: '1px solid #306dff',

                              color: '#ffffff',
                            }}>
                            Entrar
                            <ArrowUpRight size={16} />
                          </button>

                          <button
                            style={{
                              padding: 10,
                              width: '100%',
                              borderRadius: 6,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: 'transparent',
                              border: '1px solid #e3e3e3',
                            }}>
                            Criar conta
                          </button>
                        </div>
                      </div>
                    </Tabs.Content>
                  </Tabs.Root>
                </div>
              </header>
            </div>
          </C.Utils>
        </C.Group>
      </C.Content>

      <Modal
        isShown={isShown}
        hide={handleSwitch}
        verticalPosition={15}
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
