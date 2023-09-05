import * as C from './Accessibility.styles';

function Accessibility() {
  return (
    <C.Container>
      <img
        src="https://www.apple.com/v/accessibility/r/images/shared/audio_descriptions__ejb8ddn8vp26_large.png"
        style={{ width: 60 }}
        alt="imagem apple"
      />

      <h3>Acessibilidade</h3>

      <p>
        Acessibilidade significa o direito de acesso e utilização por todos a
        serviços, produtos e informação, independente de possuírem qualquer tipo
        de deficiência ou limitações. Este direito se estende a todos os
        aspectos sociais.
      </p>

      <p>
        Na Web acessibilidade refere-se a prática de fazer websites em
        conformidade com os Padrões Web, que são recomendação desenvolvidas pelo
        W3C, que garantem o acesso a todas as funcionalidades e informações por
        todos. Estas recomendações preconizam o uso de legendas para imagens e
        vídeos , estrutura HTML acessível a tecnologias assistivas, como
        leitores de tela, uso adequado de cor e tamanho de fontes, possibilitar
        o aumento ou redução de textos assim como também um modelo de alto
        contraste. Quando todas essas recomendações são corretamente utilizadas,
        demonstra a preocupação do órgão ou empresa que disponibiliza o serviço
        ou produto para com a acessibilidade.
      </p>

      <p>
        O Governo Federal Brasileiro também disponibiliza Padrões Web em suas
        cartilhas de desenvolvimento. Estas são criadas pelo Departamento de
        Governo Eletrônico e podem ser baixadas a partir do site do Governo
        Eletrônico.
      </p>
    </C.Container>
  );
}

export default Accessibility;
