import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  gap: 10px;

  padding: 10px;

  border-radius: 6px;
  border: 1px solid #e3e3e3;

  p {
    font-size: 14px;
    color: #8c8c8c;
  }

  span {
    color: #2bd45d;
  }

  canvas {
    margin: inherit !important;
  }
`;
