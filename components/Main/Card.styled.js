import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 40vh;
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
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  :hover {
    transform: scale(1.05);
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  }

  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

export const ContainerStyle = styled.div`
  margin: 1rem;
`;

export const LinkStyled = styled(Link)`
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
  text-decoration: none;
  
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
`;

export const SearchContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-column: 1 / 5;
  display: flex;
  border-radius: 20px;
  border: 1px solid lightgrey;
  background-color: lightgrey;
  svg {
    margin-left: 1rem;
    align-self: center;
    justify-self: center;
  }

  input {
    width: 20rem;
    height: 3rem;
    text-align: center;
    border-radius: 20px;
    border: none;
  }
`;

export const SearchIcon = styled(BsSearch)`
  font-size: 1rem;
  color: grey;
  margin-right: 1rem;
`;

export const Wrapper = styled.div`
  display: grid;

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

export const DeleteButton = styled.button`
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
  text-decoration: none;
  
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;

`;

export const DeleteIcon = styled(MdDelete)`
  font-size: 1rem;
  color: grey;
  margin-right: 1rem;
  cursor: pointer;
`;
