import { CreateButton, NavButton, NavContainer } from "./Navbar-styles";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <NavContainer>
      <Link href="/">
        <NavButton href="/">Home</NavButton>
      </Link>
      <Link href="/create">
        <NavButton href="/">Create +</NavButton>
      </Link>
    </NavContainer>
  );
}
