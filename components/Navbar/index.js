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
          <a>Home</a>
        </NavButton>
      </Link>
      <Link href="/create">
        <NavButton href="/">
          <AddRecipesIcon />
          <a>Create</a>
        </NavButton>
      </Link>
      <Link href="/">
        <NavButton href="/">
          <MyRecipesIcon />
          <a>Recipes</a>
        </NavButton>
      </Link>
    </NavContainer>
  );
}
