import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Food Order Shop</h1>
      </div>
      <nav>
        <Button textOnly type="button">
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
