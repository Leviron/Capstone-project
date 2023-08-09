import styled from "styled-components";
import { GiCook } from "react-icons/gi";
import { HiPlus } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import Link from "next/link";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  border-top: 1px solid #eaeaea;
`;

export const NavButton = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  margin-left: 30px;
  margin-right: 30px;

  with: 90%;
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
  color: #000;
`;

export const AddRecipesIcon = styled(HiPlus)`
  font-size: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  icon-align: center;
  text-align: center;
  color: #000;
`;

export const HomeIcon = styled(MdMenuBook)`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  icon-align: center;
  color: #000;
`;
