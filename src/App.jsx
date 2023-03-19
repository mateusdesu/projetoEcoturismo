import { Header } from "./components/Header"
import { Nav } from "./components/Nav";
import { GlobalStyle} from "./globalStyles";
import { ImageContainer } from "./components/ImageContainer";

function App() {
  
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Nav/>
    <ImageContainer title="Sobre Arraial do Cabo" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/arraial-do-cabo-capa2019.jpg"/>
    </>
  )
}

export default App
