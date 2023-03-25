import { ButtonNav,ButtonNavActive } from "./style";

export const NavButton = ({ title }) => {
  return <ButtonNav>{title}</ButtonNav>;
};

export const NavButtonActive = ({title}) =>{
    return <ButtonNavActive>{title}</ButtonNavActive>
}