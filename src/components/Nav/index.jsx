import { Container, Button } from "./styles";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <Container>
      <Link to={"/"}><Button>Sobre Arraial</Button></Link>
      <Link to={"/destinos"}><Button>Destinos</Button></Link>
      <Link><Button>Sensibilização</Button></Link>
      <Link><Button>Quiz</Button></Link>
      
    </Container>
  );
}
