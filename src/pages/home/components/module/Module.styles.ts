import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  width: 100%;
  max-width: 150px;
  height: 150px;

  border-radius: 6px;
  border: 1px solid #e3e3e3;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  padding: 10px;

  p {
    font-size: 14px;
    color: #8c8c8c;

    margin-top: 10px;
  }
`;
