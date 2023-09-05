import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import * as C from './Banner.styles';

function Banner() {
  return (
    <C.Container>
      <img
        src="https://portal.sitesagapesistemas.com.br/agape2/upload/noticias/17/img_85bf5ea93a9fc420e0f2b70d78b92a1d.jpeg"
        style={{ width: '50%', objectFit: 'contain' }}
        alt=""
      />

      <C.Content>
        <p>Concurso publico</p>

        <h2>
          Proceso seletivo simplificado em japoatã abre vagas nessa
          segunda-feira!
        </h2>

        <p style={{ fontSize: 15 }}>
          Prefeitura abre Processo Seletivo Simplificado A PREFEITURA MUNICIPAL
          DE JAPOATÃ, nos termos do art. 37, inciso II da Constituição Federal,
          Lei Orgânica Municipal, da Lei...
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <div
              style={{
                width: 20,
                height: 8,
                borderRadius: 10,
                backgroundColor: '#e3e3e3',
              }}></div>
            <div
              style={{
                width: 20,
                height: 8,
                borderRadius: 10,
                backgroundColor: '#e3e3e3',
              }}></div>
            <div
              style={{
                width: 20,
                height: 8,
                borderRadius: 10,
                backgroundColor: '#e3e3e3',
              }}></div>
            <div
              style={{
                width: 20,
                height: 8,
                borderRadius: 10,
                backgroundColor: '#6EC787',
              }}></div>
            <div
              style={{
                width: 20,
                height: 8,
                borderRadius: 10,
                backgroundColor: '#e3e3e3',
              }}></div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              style={{
                padding: 10,
                display: 'flex',
                borderRadius: 6,
              }}>
              <CaretLeft color="#757575" />
            </button>

            <button
              style={{
                padding: 10,
                display: 'flex',
                borderRadius: 6,
              }}>
              <CaretRight color="#757575" />
            </button>
          </div>
        </div>
      </C.Content>
    </C.Container>
  );
}

export default Banner;
