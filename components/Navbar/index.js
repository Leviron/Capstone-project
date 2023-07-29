import {
  NavButton,
  NavContainer,
  MyRecipesIcon,
  AddRecipesIcon,
  HomeIcon,
} from "./Navbar-styles";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <NavContainer>
      <Link href="/">
        <NavButton>
          <HomeIcon />
        </NavButton>
      </Link>
      <Link href="/create">
        <NavButton>
          <AddRecipesIcon />
        </NavButton>
      </Link>
      <Link href="/myrecipes">
        <NavButton>
          <MyRecipesIcon />
        </NavButton>
      </Link>
    </NavContainer>
  );
}
