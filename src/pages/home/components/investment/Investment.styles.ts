import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: column;
  gap: 10px;

  padding: 10px;

  border-radius: 6px;
  background-color: #306dff;
  border: 1px solid #e3e3e3;

  color: #ffffff;

  p {
    font-size: 16px;
  }

  canvas {
    margin: inherit !important;
  }
`;
