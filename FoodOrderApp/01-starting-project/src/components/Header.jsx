import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Food Order Shop</h1>
      </div>
      <nav>
        <Button textOnly type="button">
          Cart (0)
        </Button>
      </nav>
    </header>
  );
}
