import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';
import * as C from './Footer.styles';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <C.Container>
      <C.Content>
        <div>
          <p>Prefeitura de Japoatã</p>
          <h3>Portal da Transparência</h3>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
          <a href="#">Mapa do site</a>
          <a href="#">API de Dados</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: '300px',
              display: 'flex',
              gap: 6,
              flexFlow: 'column',
              marginBottom: 16,
            }}>
            <b>Localização</b>

            <p>
              Endereço: Praça Dr. José Maria Paiva Mello, 26 | Bairro Horácio F.
              Fontes | CEP 49360-000 Boquim-SE
            </p>
          </div>

          <div
            style={{
              width: '300px',
              display: 'flex',
              gap: 6,
              flexFlow: 'column',
            }}>
            <b>Ouvidoria</b>

            <p>(79) 3645-1919</p>
            <p>controleinternoboquim@outlook.com</p>
            <p>Atendimento das 9h às 18h (dias úteis)</p>
          </div>
        </div>

        <div>
          <div
            style={{
              width: '300px',
              display: 'flex',
              gap: 6,
              flexFlow: 'column',
            }}>
            <b>Redes sociais</b>

            <div
              style={{
                width: '300px',
                display: 'flex',
                gap: 6,
              }}>
              <Link to="">
                <FacebookLogo size={20} />
              </Link>
              <Link to="">
                <InstagramLogo size={20} />
              </Link>
              <Link to="">
                <TwitterLogo size={20} />
              </Link>
              <Link to="">
                <YoutubeLogo size={20} />
              </Link>
            </div>
          </div>
        </div>

        <C.Image
          src="https://atricon.org.br/wp-content/uploads/2023/07/Versao01_MARCA_ATRICON_descritivo1-1-1-e1693330435161.png"
          alt=""
        />
      </C.Content>

      <C.CreatorContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
          <Logo fill="#000" />

          <p>
            Ágape &copy; Copyright 2023. Todos direitos reservados. <br /> R.
            São Cristovão, n° 1514, Getulio Vargas. Aracaju - SE
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}>
          <Link to="">
            <FacebookLogo size={20} />
          </Link>
          <Link to="">
            <InstagramLogo size={20} />
          </Link>
          <Link to="">
            <LinkedinLogo size={20} />
          </Link>
          <Link to="">
            <TwitterLogo size={20} />
          </Link>
          <Link to="">
            <YoutubeLogo size={20} />
          </Link>
        </div>
      </C.CreatorContent>
    </C.Container>
  );
}

export default Footer;
