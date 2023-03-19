import { Container,Image,ImageTitle } from "./style";

export function ImageContainer ({src},{title}) {
    return(
        <Container>
            <Image src={src} alt="sobre" width={"320px"} height={"420px"} />
            <ImageTitle>Sobre Arraial do Cabo</ImageTitle>
        </Container>
    )
}