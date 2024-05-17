import { Container } from "./styles";
import { Link } from "react-router-dom";
import {NavButton,NavButtonActive } from "../NavButton"
import { FaTrashAlt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaSign } from "react-icons/fa";
import { FaCity } from "react-icons/fa";


export function Nav1() {
  return (
    <Container>
      <Link to={"/"}><NavButton title={<FaCity />}></NavButton></Link>
      <Link to={"/destinos"}><NavButtonActive title={<FaTrashAlt />}></NavButtonActive></Link>
      <Link to={"/sensibilizacao"}><NavButton title={<FaSign />}></NavButton></Link>
      <Link to={"/quiz"}><NavButton title={<FaGamepad />}></NavButton></Link>
      
    </Container>
  );
}
export function Nav2() {
  return (
    <Container>
      <Link to={"/"}><NavButtonActive title={<FaCity />}></NavButtonActive></Link>
      <Link to={"/destinos"}><NavButton title={<FaTrashAlt />}></NavButton></Link>
      <Link to={"/sensibilizacao"}><NavButton title={<FaSign />}></NavButton></Link>
      <Link to={"/quiz"}><NavButton title={<FaGamepad />}></NavButton></Link>
      
    </Container>
  );
}
export function Nav3() {
  return (
    <Container>
      <Link to={"/"}><NavButton title={<FaCity />}></NavButton></Link>
      <Link to={"/destinos"}><NavButton title={<FaTrashAlt />}></NavButton></Link>
      <Link to={"/sensibilizacao"}><NavButtonActive title={<FaSign />}></NavButtonActive></Link>
      <Link to={"/quiz"}><NavButton title={<FaGamepad />}></NavButton></Link>
      
    </Container>
  );
}
export function Nav4() {
  return (
    <Container>
      <Link to={"/"}><NavButton title={<FaCity />}></NavButton></Link>
      <Link to={"/destinos"}><NavButton title={<FaTrashAlt />}></NavButton></Link>
      <Link to={"/sensibilizacao"}><NavButton title={<FaSign />}></NavButton></Link>
      <Link to={"/quiz"}><NavButtonActive title={<FaGamepad />}></NavButtonActive></Link>
      
    </Container>
  );
}
