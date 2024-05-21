import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { ImageContainerModal } from "../../components/ImageContainer";

import OrientacaoPraiaImg from "../../assets/images/OrientacaoPraia.jpg";
import ConsequenciaLixoImg from "../../assets/images/ConsequenciaLixo.jpg";

const Drawer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #f0f0f0;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
`;

const MenuList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4px;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const MenuItem = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-top: 4px;
  text-decoration: underline;
  color: #0f0f0f;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const OrientacaoPraia = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <ImageContainerModal src={OrientacaoPraiaImg} alt="OrientacaoPraia" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

const ConsequenciaLixo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <ImageContainerModal src={ConsequenciaLixoImg} alt="ConsequenciaLixo" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export const MenuDrawer = (props) => {
  const { open, onClose } = props;
  const [orientacaoModalShow, setOrientacaoModalShow] = useState(false);
  const [consequenciaModalShow, setConsequenciaModalShow] = useState(false);

  return (
    <Drawer open={open}>
      <CloseButton onClick={onClose}>
        <FaTimesCircle size={"2em"} color="#4a4da3" />
      </CloseButton>
      <MenuList>
        <MenuItem onClick={() => setOrientacaoModalShow(true)}>
          Orientações de uso das praias
        </MenuItem>
        <MenuItem onClick={() => setConsequenciaModalShow(true)}>
          Cartilha de uso das praias
        </MenuItem>
        <Link to="https://www.arraialdocabocvb.com.br/hospedagem-associados-arraial-do-cabo-convention">
          <MenuItem>Hotéis</MenuItem>
        </Link>
        <Link to="https://www.google.com.br/maps/place/Arraial+do+Cabo,+RJ,+28930-000/@-22.9646742,-42.0298108,14z/data=!3m1!4b1!4m6!3m5!1s0x97197ba011d3a9:0x3c4a2b7b14e00309!8m2!3d-22.9667613!4d-42.0277716!16s%2Fm%2F027l4rv">
          <MenuItem>Mapas</MenuItem>
        </Link>
        <Link to="https://www.arraialdocabocvb.com.br/gastronomia-associados-arraial-do-cabo-convention">
          <MenuItem>Restaurantes</MenuItem>
        </Link>
        <Link to="https://www.youtube.com/watch?v=MjQpjg6Wg18&ab_channel=Vin%C3%ADciusPereira">
          <MenuItem>Linguagem local</MenuItem>
        </Link>
        <Link to="../desenvolvedores">
          <MenuItem>Desenvolvedores</MenuItem>
        </Link>
      </MenuList>
      <OrientacaoPraia show={orientacaoModalShow} onHide={() => setOrientacaoModalShow(false)} />
      <ConsequenciaLixo show={consequenciaModalShow} onHide={() => setConsequenciaModalShow(false)} />
    </Drawer>
  );
};
