import { Container } from "./styles";
import { Link } from "react-router-dom";
import {NavButton,NavButtonActive } from "../NavButton"

export function Nav1() {
  return (
    <Container>
      <Link to={"/"}><NavButtonActive title={"Sobre Arraial"}></NavButtonActive></Link>
      <Link to={"/destinos"}><NavButton title={"Destinos"}></NavButton></Link>
      <Link to={"/sensibilizacao"}><NavButton title={"Sensibilização"}></NavButton></Link>
      <Link to={"/quiz"}><NavButton title={"Quiz"}></NavButton></Link>
      
    </Container>
  );
}
export function Nav2() {
  return (
    <Container>
      <Link to={"/"}><NavButton title={"Sobre Arraial"}></NavButton></Link>
      <Link to={"/destinos"}><NavButtonActive title={"Destinos"}></NavButtonActive></Link>
      <Link to={"/sensibilizacao"}><NavButton title={"Sensibilização"}></NavButton></Link>
      <Link to={"/quiz"}><NavButton title={"Quiz"}></NavButton></Link>
      
    </Container>
  );
}
export function Nav3() {
  return (
    <Container>
      <Link to={"/"}><NavButton title={"Sobre Arraial"}></NavButton></Link>
      <Link to={"/destinos"}><NavButton title={"Destinos"}></NavButton></Link>
      <Link to={"/sensibilizacao"}><NavButtonActive title={"Sensibilização"}></NavButtonActive></Link>
      <Link to={"/quiz"}><NavButton title={"Quiz"}></NavButton></Link>
      
    </Container>
  );
}
export function Nav4() {
  return (
    <Container>
      <Link to={"/"}><NavButton title={"Sobre Arraial"}></NavButton></Link>
      <Link to={"/destinos"}><NavButton title={"Destinos"}></NavButton></Link>
      <Link to={"/sensibilizacao"}><NavButton title={"Sensibilização"}></NavButton></Link>
      <Link to={"/quiz"}><NavButtonActive title={"Quiz"}></NavButtonActive></Link>
      
    </Container>
  );
}
