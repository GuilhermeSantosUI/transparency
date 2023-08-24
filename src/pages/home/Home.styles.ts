import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  p {
    color: #8c8c8c;
    font-size: 14px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 32px 0;

    border: 1px solid #f2f2f2;
    overflow: hidden;
    border-collapse: separate;

    border-radius: 16px;
  }

  td,
  th {
    text-align: left;
    padding: 10px;
  }

  input {
    padding: 8px;
    padding-right: 20px;
    border-radius: 6px;

    border: 1px solid #f2f2f2;
    font-size: 14px;
  }

  span {
    display: flex;
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
`;
