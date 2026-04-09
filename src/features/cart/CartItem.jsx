import Button from "../../components/Button";

function CartItem({ cart }) {
  const { name, quantity, unitPrice, totalPrice } = cart;

  function handleIncrement() {}

  return (
    <li className="flex items-center justify-between py-3">
      <p className="text-mauve-bark-900 font-medium">
        {quantity}&times; {name}
      </p>
      <span className="text-burnt-peach-600 text-sm font-semibold">
        ${unitPrice * quantity}
      </span>
      <div className="flex gap-2">
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleIncrement}>-</Button>
        <Button>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
