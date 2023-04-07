import React from "react";
import { Container, Title,StyledLink,LinkContainer } from "./styles";
import { FaMapMarkedAlt,FaBars} from "react-icons/fa"
import {MenuDrawer} from "../MenuDrawer"

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  const handleMenuClose = () => {
    setMenuOpen(false);
  }

  return (
    <Container>

      <LinkContainer>
        <StyledLink onClick={handleMenuToggle}>
          <FaBars size={"2em"} cursor={"pointer"} color={"white"}/>
        </StyledLink>
        <MenuDrawer open={menuOpen} onClose={handleMenuClose}/>

      </LinkContainer>

      <Title>Arraial do Cabo</Title>
      
     <LinkContainer>
     <StyledLink to={"/mapa"}>
        <FaMapMarkedAlt size={"2em"} cursor={"pointer"} color={"white"}/>
     </StyledLink>

     </LinkContainer>
    </Container>
  );
}
