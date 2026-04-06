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

  function handleClearCart() {
    // Logic to clear the cart goes here
    console.log("Cart cleared");
  }
  return (
    <div className="mx-auto mt-8 max-w-6/10 md:max-w-6/10">
      <CartOverview cart={cart} />
      <div className="mt-8 flex justify-between">
        <Button onclick={handleOrder}>Order Now</Button>
        <Button onclick={handleClearCart}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
