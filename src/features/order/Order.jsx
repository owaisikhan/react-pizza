// Test ID: IIDSAT

import { Form, redirect } from "react-router";
import Button from "../../components/Button";
import { createOrder } from "../../services/apiPizza";
const orderID = "IIDSAT";

const cart = [
  {
    pizzaId: 1,
    name: "Margherita",
    unitPrice: 12,
    ingredients: ["tomato", "mozzarella", "basil"],
    quantity: 2,
  },
  {
    pizzaId: 2,
    name: "Capricciosa",
    unitPrice: 14,
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    quantity: 4,
  },
];

function Order() {
  return (
    // <Form action={`/order/${orderID}`} method="post">
    <Form method="post">
      <input type="text" name="customer" placeholder="name" required />
      <input type="number" name="phone" placeholder="phone number" required />
      <input type="text" name="address" placeholder="address" required />
      <label htmlFor="Priority">Priority</label>
      <input type="checkbox" name="priority" id="Priority" />
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <Button type="submit"> Order Now </Button>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const parsedData = Object.fromEntries(formData);
  const newOrder = {
    ...parsedData,
    // priority: parsedData.priority === "on",
    priority: parsedData.priority === "on",
    cart: JSON.parse(parsedData.cart),
  };
  const data = await createOrder(newOrder);
  console.log(data);
  return redirect(`/order/${data.id}`);
  // return null;
}

export default Order;
