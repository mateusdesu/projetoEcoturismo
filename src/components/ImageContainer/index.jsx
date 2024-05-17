import { Container, Image } from "./style";

export const ImageContainer = ({ src }) => {
  return (
    <Container>
      <Image src={src} alt="sobre" width={"auto"} height={"100%"} />
    </Container>
  );
};