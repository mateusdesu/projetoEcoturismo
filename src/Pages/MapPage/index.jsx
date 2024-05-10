import {
  Header,
  MapContainer,
  Container,
  MapImage,
  HeaderText,
  InfoContainer,
  Bar,
  ListContainer,
  ListItem,
  ListText,
  ListBar,
} from "./style";
import { FaAngleLeft, FaRegCompass, FaUmbrellaBeach } from "react-icons/fa";
import image from "../../assets/images/Map2.png";
import { useNavigate } from "react-router-dom";

export const MapPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <FaAngleLeft
          cursor={"pointer"}
          size={"2em"}
          onClick={() => navigate(-1)}
        />
        <HeaderText>Mapa da Região</HeaderText>
        <FaRegCompass cursor={"pointer"} size={"2em"} />
      </Header>
      <MapContainer>
        <MapImage src={image} />
      </MapContainer>
      <InfoContainer>
        <Bar />
        <ListContainer>
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>Praia dos Anjos</ListText>
          </ListItem>
          <ListBar />
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>Praia do Forno</ListText>
          </ListItem>
          <ListBar />
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>Praia do Farol</ListText>
          </ListItem>
          <ListBar />
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>As Prainhas do Pontal do Atalaia</ListText>
          </ListItem>
          <ListBar />
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>Praia Grande</ListText>
          </ListItem>
          <ListBar />
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>Prainha</ListText>
          </ListItem>
          <ListBar />
          <ListItem>
            <FaUmbrellaBeach size={"1.25em"} />
            <ListText>Praia do Pontal</ListText>
          </ListItem>
          <ListBar />
        </ListContainer>
      </InfoContainer>
    </Container>
  );
};
