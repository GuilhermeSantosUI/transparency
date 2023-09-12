import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 24px 0;

  display: flex;
  flex-flow: column;
  gap: 16px;

  input {
    padding: 8px;
    padding-right: 20px;
    border-radius: 6px;

    border: 1px solid #f2f2f2;
    font-size: 14px;
  }
`;

export const GridModules = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(146px, 10px));
  grid-template-rows: 1fr;

  gap: 10px;
`;
