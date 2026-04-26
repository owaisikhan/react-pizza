import { useDeleteRow } from "../features/menu/useDeleteRow";
import { useUpdateQuantity } from "../features/menu/useUpdateQuantity";
import Button from "./Button";

function UpdateQuantity({ name, ItemQuantity }) {
  const { updatePizzaQuantity, isUpdating } = useUpdateQuantity();
  const { deletePizzaRow } = useDeleteRow(name);

  function handleIncrement() {
    updatePizzaQuantity({ name, quantity: ItemQuantity + 1 });
  }
  function handleDecrement() {
    if (ItemQuantity === 1) {
      // call the delete function in api cart when quantity is 0
      deletePizzaRow(name);
    } else {
      updatePizzaQuantity({ name, quantity: ItemQuantity - 1 });
    }
  }
  return (
    <>
      <Button disabled={isUpdating} type="small" onClick={handleIncrement}>
        +
      </Button>

      {ItemQuantity}
      <Button disabled={isUpdating} onClick={handleDecrement} type="small">
        -
      </Button>
    </>
  );
}

export default UpdateQuantity;
