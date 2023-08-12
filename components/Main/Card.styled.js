import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";

export const StylePicture = styled.img`
  width: 100%;
  height: 50%;

  border-radius: 17px;
  object-fit: cover;
  object-position: center;
`;

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 50vw;
  height: 50vh;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid none;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  margin-top: 5.5vh;

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const MoreDetailsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 18vw;
  border-radius: 20px;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 80%;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  a {
    width: 100%;
    height: 100%;
  }

  :hover {
    background-color: white;
    color: black;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin-left: 0px;
  margin: 0;
  padding: 0;
`;

export const ContainerStyle = styled.li``;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 3vh;
  align-items: center;
  justify-content: center;
  width: 100%;

  border-radius: 20px;
  border: 1px solid, rgba(217, 217, 217, 0.58);
  background: rgba(217, 217, 217, 0.58);
  svg {
    margin-left: 1rem;
    align-self: center;
    justify-self: center;
  }

  input {
    width: 25rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 15vh;
`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const EditLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const LikeIcon = styled(FcLike)`
  font-size: 1.5rem;
  cursor: pointer;

  :active {
    transform: scale(0.85) rotateZ(1.7deg);
  }
`;

export const DeleteIcon = styled(MdDelete)`
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
  :active {
    transform: scale(0.85) rotateZ(1.7deg);
  }
`;

export const EditIcon = styled(MdEdit)`
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
  :active {
    transform: scale(0.85) rotateZ(1.7deg);
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
`;

export const FavoriteButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  :active {
    transform: scale(0.95) rotateZ(1.7deg);
    color: 16CA21;
  }
`;

export const FavoriteIcon = styled(AiFillLike)`
  font-size: 1.5rem;
  cursor: pointer;

  :active {
    transform: scale(0.85) rotateZ(1.7deg);
    color: #4dca16;
  }
`;
