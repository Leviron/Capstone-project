import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Link from "next/link";

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 40vw;
  height: 60vh;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  transition: all 0.5s;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  margin-top: 3rem;

  :hover {
    transform: scale(1.05);
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  }

  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const MoreDetailsLink = styled(Link)`
  height: 3vh;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: center;
  background-color: white;
  border-radius: 20px;
  border: 1px solid black;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  justify-content: flex-end;
  text-decoration: none;

  cursor: pointer;

  :hover {
    color: black;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }
`;

export const CardList = styled.ul`
  list-style-type: none;
`;

export const ContainerStyle = styled.li`
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 3vh;

  grid-column: 1 / 3;
  grid-column.start: 1;
  grid-column-end: 3;
  align-items: center;
  justify-content: center;

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
  font-size: 100%;
  color: grey;
  margin-right: 1vw;
  align-self: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  justify-content: center;
  align-content: center;
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const EditLink = styled(Link)``;

export const DeleteIcon = styled(MdDelete)`
  font-size: 100%;
  color: grey;

  cursor: pointer;
`;

export const EditIcon = styled(MdEdit)`
  font-size: 100%;
  color: grey;

  cursor: pointer;
`;
