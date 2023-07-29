import styled from "styled-components";
import { LiaUtensilSpoonSolid } from "react-icons/lia";
import { PiCookingPotBold } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";

export default function Header() {
  return (
    <Heading>
      <KnifeIcon />
      <PotIcon />
      <h1>My Recipe</h1>
      <SpoonIcon />
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 2%;
  border-radius: 50%;
  text-underline-offset: 10px;
  text-decoration: underline;
  text-decoration-color: #d672a0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: "Brush Script MT", cursive;
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #d672a0;
  }
`;

const SpoonIcon = styled(LiaUtensilSpoonSolid)`
  font-size: 2rem;
  color: #d69a75;
`;
const PotIcon = styled(PiCookingPotBold)`
  font-size: 2rem;
  color: #d46ad5;
`;
const KnifeIcon = styled(ImSpoonKnife)`
  font-size: 2rem;

  color: #8492d9;
`;
