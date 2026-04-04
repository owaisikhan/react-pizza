function CartItem({ cart }) {
  const { name, unitPrice, ingredients, quantity } = cart;
  return (
    <li>
      <p>{name}</p>
      <p>{ingredients.join(", ")}</p>
      <span>{unitPrice * quantity}</span>
    </li>
  );
}

export default CartItem;
