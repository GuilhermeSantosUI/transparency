import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 24px 0;

  display: flex;
  flex-flow: column;
  gap: 16px;
`;

export const GridModules = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 10px));
  grid-template-rows: 1fr;

  gap: 10px;
`;
