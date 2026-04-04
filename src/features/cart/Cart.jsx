import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import CartOverview from "./CartOverview";

const cart = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 12,
    ingredients: ["tomato", "mozzarella", "basil"],
    quantity: 2,
  },
  {
    id: 2,
    name: "Capricciosa",
    unitPrice: 14,
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    quantity: 4,
  },
];

function Cart() {
  const navigate = useNavigate();

  function handleOrder() {
    navigate("/order");
  }
  return (
    <div>
      <CartOverview cart={cart} />;
      <Button onclick={handleOrder}>Order Now</Button>
    </div>
  );
}

export default Cart;
