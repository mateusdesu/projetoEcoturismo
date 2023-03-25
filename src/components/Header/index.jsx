import { Container, Title,StyledLink,LinkContainer } from "./styles";
import {Link} from "react-router-dom";

import { FaMapMarkedAlt,FaBars} from "react-icons/fa"

export function Header() {
  return (
    <Container>
      <LinkContainer>
      <StyledLink to={"/"}><FaBars size={"1.5em"} cursor={"pointer"} color={"white"}/></StyledLink>
      </LinkContainer>
      <Title>Arraial do Cabo</Title>
     <LinkContainer>
     <StyledLink to={"/mapa"}>
     <FaMapMarkedAlt size={"1.6em"} cursor={"pointer"} color={"white"}/>
     </StyledLink>
     </LinkContainer>
    </Container>
  );
}
