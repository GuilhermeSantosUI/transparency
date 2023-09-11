import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0;

  display: flex;
  flex-flow: column;
  gap: 10px;

  p,
  a {
    font-size: 14px;
  }
`;

export const Content = styled.div`
  padding-top: 1.4rem;
  border-top: 1px solid #f2f2f2;

  display: flex;
  flex-flow: column;
  gap: 16px;

  position: relative;
  p {
    color: #8c8c8c;
  }
`;

export const CreatorContent = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 32px;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 280px;
  right: 0px;
  top: 64px;
`;
