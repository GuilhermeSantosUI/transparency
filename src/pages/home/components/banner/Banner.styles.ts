import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;

  border-radius: 10px;
  border: 1px solid #e3e3e3;

  clip-path: content-box;

  img {
    border-radius: 10px 0 0 10px;
  }

  p {
    color: #8c8c8c;
  }
`;

export const Content = styled.div`
  padding: 24px;

  display: flex;
  flex-flow: column;
  justify-content: end;
  gap: 10px;
`;
