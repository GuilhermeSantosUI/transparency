import styled, { keyframes } from 'styled-components';

interface IWrapper {
  verticalPosition?: number;
}

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Wrapper = styled.div<IWrapper>`
  position: fixed;

  top: ${({ verticalPosition }) =>
    verticalPosition ? `${verticalPosition}%` : '50%'};

  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;

  input {
    width: 400px;

    padding: 14px;
    border-radius: 10px;

    border: 1px solid #f2f2f2;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(217, 217, 217, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  position: relative;
  margin: auto;

  animation: ${appearFromTop} 0.4s;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;

export const Content = styled.div`
  padding: 24px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ConfirmationButtons = styled.div`
  width: 100%;
  padding-top: 15px;

  border-top: 1px solid #f2f2f2;

  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const AppIcon = styled.img``;

export const TitleMessage = styled.p`
  font-weight: 500;
  font-size: 26px;
  line-height: 31px;

  color: #232326;
`;

export const Message = styled.p`
  width: 320px;

  margin-bottom: 10px;
  line-height: 20px;

  color: #8c8c8c;
`;
