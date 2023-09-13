import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 100%;

  padding: 20px;

  display: flex;
  justify-content: space-between;
  flex-flow: column;

  background: #f9f9f9;
  border-right: 1px solid #f2f2f2;

  p {
    font-size: 13px;
    margin-bottom: 4px;
    color: #8c8c8c;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;

  gap: 10px;

  img {
    width: 160px;
  }

  a {
    font-size: 14px;
    padding: 8px;

    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
      background: #efeded;
    }
  }

  .active {
    background: #efeded;
  }

  a,
  svg {
    color: #1e1e1e;
    fill: #1e1e1e;
  }
`;
