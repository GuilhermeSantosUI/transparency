import * as C from './About.styles';

function About() {
  return (
    <C.Container>
      <h3>Sobre a prefeitura</h3>
      <h2>História de Japoatã</h2>

      <img
        src="https://portal.sitesagapesistemas.com.br/agape2/upload/historia/17/img_01c189abdff37018e444726b9b3f77d0-05-04-2019.jpg"
        alt=""
        style={{
          width: '80%',
          height: 400,
          objectFit: 'cover',
          margin: '24px 0',
          borderRadius: '16px',
        }}
      />

      <p>
        No início denominava-se Jaboatã, nome cuja origem está <br /> dividida
        em duas correntes de opinião.
      </p>
    </C.Container>
  );
}

export default About;
