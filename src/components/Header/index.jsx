import { Container, Title } from "./styles";
import { BsThreeDots, BsFillMapFill,BsJustifyLeft,BsSignpost2 } from "react-icons/bs";
import { FaMapMarkedAlt,FaBars} from "react-icons/fa"

export function Header() {
  return (
    <Container>
      <FaBars size={"1.5em"} cursor={"pointer"} color={"white"}/>
      <Title>Arraial do Cabo</Title>
      <FaMapMarkedAlt size={"1.5em"} cursor={"pointer"} color={"white"}/>
    </Container>
  );
}
