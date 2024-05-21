import { Container, Image, ImageModal } from "./style";

export const ImageContainer = ({ src }) => {
  return (
    <Container>
      <Image src={src} alt="sobre" width={"auto"} height={"100%"} />
    </Container>
  );
};

export const ImageContainerModal = ({ src }) => {
  return (
    <Container>
      <ImageModal src={src} alt="sobre" width={"auto"} height={"100%"} />
    </Container>
  );
};