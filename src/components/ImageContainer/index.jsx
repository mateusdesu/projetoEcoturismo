import { Container,Image } from "./style";

export function ImageContainer ({src}) {
    return(
        <Container>
            <Image src={src} alt="sobre" width={"320px"} height={"420px"} />
        </Container>
    )
}