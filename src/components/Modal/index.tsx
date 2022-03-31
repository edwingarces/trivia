import { ReactElement, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

type Props = {
  children: ReactElement
}

const Modal = ({ children }: Props) => {
  const modalElement = document.getElementById('modal');
  const element = document.createElement('div');
  element.classList.add('ModalElement');
  useEffect(() => {
    modalElement?.appendChild(element);
    return () => {
      setTimeout(() => {
        element.style.opacity = '.7';
        setTimeout(() => {
          element.style.opacity = '.5';
          setTimeout(() => {
            element.style.opacity = '.3';
            setTimeout(() => {
              element.style.opacity = '.1';
              setTimeout(() => {
                element.style.opacity = '.0';
                setTimeout(() => {
                  modalElement?.removeChild(element);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    };
  }, []);
  return ReactDOM.createPortal(children, element);
};

export default Modal;
