import Button from "../../components/Button";

function CartItem({ cart }) {
  // const { name, pizzaId, quantity, unitPrice, totalPrice } = cart;
  const { name, quantity, unitPrice, totalPrice } = cart;

  // pizzaId: id,
  // name,
  // quantity: 1,
  // unitPrice,
  // totalPrice: unitPrice * 1,

  function handleIncrement() {}

  return (
    <li className="flex items-center justify-between py-3">
      <p>
        {quantity}&times; {name}
      </p>

      {/* <p>{ingredients.join(", ")}</p> */}
      <span>{unitPrice * quantity}$</span>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleIncrement}>-</Button>
      <Button>Delete</Button>
    </li>
  );
}

export default CartItem;
