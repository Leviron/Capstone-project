import {
  NavButton,
  NavContainer,
  MyRecipesIcon,
  AddRecipesIcon,
  HomeIcon,
} from "./Navbar-styles";

export default function NavigationBar() {
  return (
    <NavContainer>
      <NavButton href="/">
        <HomeIcon />
      </NavButton>
      <NavButton href="/create">
        <AddRecipesIcon />
      </NavButton>

      <NavButton href="/myrecipes">
        <MyRecipesIcon />
      </NavButton>
    </NavContainer>
  );
}
