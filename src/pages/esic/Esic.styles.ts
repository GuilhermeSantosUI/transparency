import styled from 'styled-components';

export const Container = styled.div`
  a {
    width: 100%;
    max-width: 390px;

    padding: 10px;

    display: flex;
    flex-flow: column;
    gap: 10px;

    border: 1px solid #e9e8ea;
    border-radius: 6px;

    background: #fafafa;
  }

  p,
  svg {
    color: #3c4149;
    fill: #3c4149;
  }
`;

export const GridModules = styled.div`
  width: 100%;

  padding: 16px 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 10px));
  grid-template-rows: 1fr;

  gap: 10px;
`;
