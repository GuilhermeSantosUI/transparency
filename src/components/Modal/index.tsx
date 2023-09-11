import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import * as C from './styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  verticalPosition?: number;
  modalContent: ReactNode;
}

function Modal({ isShown, hide, verticalPosition, modalContent }: ModalProps) {
  const modal = (
    <>
      <C.Backdrop onClick={hide} />
      <C.Wrapper verticalPosition={verticalPosition}>
        <C.StyledModal>
          <C.Content>{modalContent}</C.Content>
        </C.StyledModal>
      </C.Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}
export default Modal;
