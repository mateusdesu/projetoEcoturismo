import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { ImageContainerModal } from "../../components/ImageContainer";
import { PdfCarousel } from "../Carousel";

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
  font-size: 20px;
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
const Criterio = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <PdfCarousel />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};
const Educacao = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Link to={"https://www.youtube.com/watch?v=5T4MJprBNX0"}>
              <h4>Como salvar o nosso planeta</h4>
            </Link>
            <Link to={"https://www.youtube.com/watch?v=qtimxgy95pM"}>
              <h4>
                PLANETA TERRA - Vídeo de sensibilização de educação ambiental
              </h4>
            </Link>
            <Link to={"https://www.youtube.com/watch?v=MTV6xfKI2i4"}>
              <h4>Limpei a Praia Mais Suja do Mundo</h4>
            </Link>
            <Link to={"https://www.youtube.com/watch?v=snHn5HQxweo"}>
              <h4>As imagens que mostram o gigantesco mar de lixo no Caribe</h4>
            </Link>
            <Link to={"https://www.youtube.com/watch?v=4l7Jns0u9Sg"}>
              <h4>Plástico nos oceanos: O que fazer para não poluir</h4>
            </Link>
          </div>
        </div>
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

const Privacidade = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>
          Seus dados pessoais não são compartilhados com o aplicativo, logo para
          acessá-lo não é fornecido e coletado nenhum dado do usuário. Apenas
          acesso a internet para navegar na interface do aplicativo.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};
const Projeto = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>
          O aplicativo foi um produto do curso de mestrado da UniCarioca junto
          com a Nucap da mestranda Elga Viana Barreto Alves e que serve de base
          para consulta de restaurantes locais da cidade de Arraial do Cabo;
          rede hoteleira; localização de algumas praias; jogos educacionais;
          links de vídeos sobre educação ambiental; podcast de educação
          ambiental; placas de conscientização sobre educação ambiental;
          histórias locais e curiosidades. O aplicativo teve como principal
          objetivo propor uma ferramenta que possa auxiliar o turista, visitante
          e morador na preservação e conscientização do meio ambiente, ajudando,
          assim, a desenvolver alguns conceitos de sustentabilidade e de um
          turismo sustentável na cidade. Podendo também servir dentro das
          esferas educacionais: formal, informal e não formal.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};
const Responsabilidade = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>
          Os responsáveis por esse aplicativo, não se responsabilizam por
          qualquer dano que possa ocorrer por informações retiradas desse
          aplicativo para basear-se em outros trabalhos, visto que foram
          retiradas de observações in loco, porém são relatos e sites de
          consultas retirados na data de execução, não podendo garantir que as
          fontes dos sites sejam modificadas ou alteradas em datas futuras. Fica
          expressamente acertado o caráter informativo do aplicativo.
        </p>
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
  const [criterioModalShow, setCriterioModalShow] = useState(false);
  const [educacaoModalShow, setEducacaoModalShow] = useState(false);
  const [privacidadeModalShow, setPrivacidadeModalShow] = useState(false);
  const [responsabilidadeModalShow, setResponsabilidadeModalShow] =
    useState(false);
  const [projetoModalShow, setProjetoModalShow] = useState(false);

  return (
    <Drawer open={open}>
      <CloseButton onClick={onClose}>
        <FaTimesCircle size={"2em"} color="#4a4da3" />
      </CloseButton>
      <MenuList>
        <MenuItem onClick={() => setProjetoModalShow(true)}>
          O Projeto
        </MenuItem>
        <MenuItem onClick={() => setOrientacaoModalShow(true)}>
          Orientações de uso das praias
        </MenuItem>
        <MenuItem onClick={() => setCriterioModalShow(true)}>
          Cartilha de uso das praias
        </MenuItem>
        <MenuItem onClick={() => setConsequenciaModalShow(true)}>
          Consequências do lixo no meio ambiente
        </MenuItem>
        <Link to="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9oYU85dHo5SA/episode/NGUyMzc5NmQtY2ZmZC00MTg2LTg3NjctNzA4ZDYyYjU0Njg2?ep=14 ">
          <MenuItem>Podcast Ambiental</MenuItem>
        </Link>
        <MenuItem onClick={() => setEducacaoModalShow(true)}>
          Vídeos de Educação Ambiental
        </MenuItem>
        <Link to="https://www.youtube.com/watch?v=MjQpjg6Wg18&ab_channel=Vin%C3%ADciusPereira">
          <MenuItem>Linguagem local</MenuItem>
        </Link>
        <Link to="https://www.google.com.br/maps/place/Arraial+do+Cabo,+RJ,+28930-000/@-22.9646742,-42.0298108,14z/data=!3m1!4b1!4m6!3m5!1s0x97197ba011d3a9:0x3c4a2b7b14e00309!8m2!3d-22.9667613!4d-42.0277716!16s%2Fm%2F027l4rv">
          <MenuItem>Mapas</MenuItem>
        </Link>

        <Link to="https://www.arraialdocabocvb.com.br/hospedagem-associados-arraial-do-cabo-convention">
          <MenuItem>Hotéis</MenuItem>
        </Link>

        <Link to="https://www.arraialdocabocvb.com.br/gastronomia-associados-arraial-do-cabo-convention">
          <MenuItem>Restaurantes</MenuItem>
        </Link>
        <MenuItem onClick={() => setPrivacidadeModalShow(true)}>
          Política de Privacidade
        </MenuItem>
        <MenuItem onClick={() => setResponsabilidadeModalShow(true)}>
          Termo de Responsabilidade
        </MenuItem>
        <Link to="../desenvolvedores">
          <MenuItem>Desenvolvedores</MenuItem>
        </Link>
      </MenuList>
      <OrientacaoPraia
        show={orientacaoModalShow}
        onHide={() => setOrientacaoModalShow(false)}
      />
      <ConsequenciaLixo
        show={consequenciaModalShow}
        onHide={() => setConsequenciaModalShow(false)}
      />
      <Criterio
        show={criterioModalShow}
        onHide={() => setCriterioModalShow(false)}
      />
      <Educacao
        show={educacaoModalShow}
        onHide={() => setEducacaoModalShow(false)}
      />
      <Privacidade
        show={privacidadeModalShow}
        onHide={() => setPrivacidadeModalShow(false)}
      />
      <Responsabilidade
        show={responsabilidadeModalShow}
        onHide={() => setResponsabilidadeModalShow(false)}
      />
      <Projeto
        show={projetoModalShow}
        onHide={() => setProjetoModalShow(false)}
      />
    </Drawer>
  );
};
