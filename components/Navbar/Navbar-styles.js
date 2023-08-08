import styled from "styled-components";
import { GiCook } from "react-icons/gi";
import { IoMdCreate } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(217, 217, 217, 0.58);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;

  border-top: 1px solid #eaeaea;
`;

export const NavButton = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  margin-left: 30px;
  margin-right: 30px;

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
