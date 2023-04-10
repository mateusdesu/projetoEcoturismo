import styled from 'styled-components';
import {FaTimesCircle} from "react-icons/fa"

const Drawer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  transition: all 0.3s ease-in-out;
  z-index:1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border:none;
`;

export const MenuDrawer = (props) => {
  const { open, onClose } = props;

  return (
    <Drawer open={open}>
      <CloseButton onClick={onClose}><FaTimesCircle size={"2em"} color='#4a4da3'/></CloseButton>
      {/* Adicione o conteúdo do menu drawer aqui */}
    </Drawer>
  );
}


