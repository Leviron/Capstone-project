import styled from "styled-components";
import { GiCook } from "react-icons/gi";
import { IoMdCreate } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50% 50%;
  border-top: 1px solid #eaeaea;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-left: 30px;
  margin-right: 30px;
  width: 90%;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const MyRecipesIcon = styled(GiCook)`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  icon-align: center;

  a {
    font-size: 0.8rem;
    text-decoration: none;
  }
`;

export const AddRecipesIcon = styled(IoMdCreate)`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  icon-align: center;
  text-align: center;

  a {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const HomeIcon = styled(MdMenuBook)`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  icon-align: center;

  a {
    font-size: 0.8rem;
    text-align: center;
  }
`;
