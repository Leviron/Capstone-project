import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 254px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  transition: all 0.5s;
  user-select: none;
  font-weight: bolder;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  :hover {
    transform: scale(1.05);
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  }

  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`;

export const ContainerStyle = styled.div`
  margin: 1rem;
`;

export const MoreDetailButton = styled.button`
  width: 10rem;
  height: 2rem;
  border-radius: 20px;
  border: 1px solid black;
  border-color: grey;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  justify-content: flex-end;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
`;

export const SearchContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-column: 1 / 5;
  padding: 1rem;
  display: flex;
  border-radius: 20px;
  
  input {
    width: 40rem;
    height: 3rem;
    text-align: center;
    border-color: white;
    
  }

  }
`;

export const SearchIcon = styled(BsSearch)``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem;
  margin-top: 2rem;

  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  background-color: white;
`;
