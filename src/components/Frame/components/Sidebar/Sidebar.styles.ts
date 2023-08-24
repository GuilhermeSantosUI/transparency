import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border-right: 1px solid #f2f2f2;

  img {
    width: 160px;
  }

  p {
    font-size: 13px;
    margin-bottom: 4px;
    color: #8c8c8c;
  }

  a {
    font-size: 14px;
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 6px;
  }

  a,
  svg {
    color: #1e1e1e;
    fill: #1e1e1e;
  }
`;
