import Button from "../../components/Button";
import UpdateQuantity from "../../components/UpdateQuantity";
import DeleteItem from "../../components/DeleteItem";

function CartItem({ cart }) {
  const { name, quantity, unitPrice } = cart;

  return (
    <li className="flex items-center justify-between py-3">
      <p className="text-mauve-bark-900 basis-1/3 font-medium">
        {quantity}&times; {name}
      </p>
      <span className="text-burnt-peach-600 mr-6 text-sm font-semibold">
        Rs {unitPrice.toLocaleString("en-PK")}
      </span>
      <div className="flex items-center justify-center gap-2">
        <UpdateQuantity name={name} ItemQuantity={quantity} />

        {/* delete Button */}
        <DeleteItem queryKey={name} />
      </div>
    </li>
  );
}

export default CartItem;
