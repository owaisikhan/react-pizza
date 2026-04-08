// Test ID: IIDSAT

import { Form, redirect } from "react-router";
import Button from "../../components/Button";
import { createOrder } from "../../services/apiPizza";
import { useSelector } from "react-redux";
const orderID = "IIDSAT";

// const cart = [
//   {
//     pizzaId: 1,
//     name: "Margherita",
//     unitPrice: 12,
//     ingredients: ["tomato", "mozzarella", "basil"],
//     quantity: 2,
//   },
//   {
//     pizzaId: 2,
//     name: "Capricciosa",
//     unitPrice: 14,
//     ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
//     quantity: 4,
//   },
// ];

function Order() {
  const userName = useSelector((state) => state.user.name);
  const cart = useSelector((state) => state.cart.cart);

  return (
    // <Form action={`/order/${orderID}`} method="post">
    <Form method="post" className="mx-4 mt-8 flex flex-col gap-4 sm:max-w-7/10">
      <p className="mb-2 text-2xl font-medium">Ready to Order! Lets Go</p>
      <div className="flex items-center gap-4">
        <label className="w-30" htmlFor="customer">
          First Name
        </label>
        <input
          type="text"
          id="customer"
          name="customer"
          placeholder="name"
          defaultValue={userName}
          required
          className="mx-2 flex-1 rounded-2xl border-2 border-stone-400 px-4 py-1 text-stone-800 transition-all duration-700 focus:w-full focus:border-stone-500 focus:outline-none"
        />
      </div>
      <div className="flex w-full items-center gap-4">
        <label className="w-30" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="phone number"
          required
          className="mx-2 flex-1 rounded-2xl border-2 border-stone-400 px-4 py-1 text-stone-800 transition-all duration-700 focus:w-full focus:border-stone-500 focus:outline-none"
        />
      </div>
      <div className="flex w-full items-center gap-4">
        <label className="w-30" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="address"
          required
          className="mx-2 flex-1 rounded-2xl border-2 border-stone-400 px-4 py-1 text-stone-800 transition-all duration-700 focus:w-full focus:border-stone-500 focus:outline-none"
        />
      </div>
      <div className="mb-4 flex items-center gap-4">
        <input
          type="checkbox"
          name="priority"
          id="Priority"
          className="size-5 cursor-pointer appearance-none rounded-md border-2 border-stone-300 bg-white transition-all duration-150 checked:size-[14px_14px] checked:border-amber-500 checked:bg-amber-500 checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M3%208l3.5%203.5L13%204.5%22%2F%3E%3C%2Fsvg%3E')] checked:bg-center checked:bg-no-repeat hover:border-amber-500 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-90"
        />

        <label htmlFor="Priority">Want to give your Order Priority</label>
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />

      <span className="self-center">
        <Button type="submit"> Order Now </Button>
      </span>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const parsedData = Object.fromEntries(formData);
  console.log(parsedData);

  const newOrder = {
    ...parsedData,
    // priority: parsedData.priority === "on",
    priority: parsedData.priority === "on",
    cart: JSON.parse(parsedData.cart),
  };
  const data = await createOrder(newOrder);
  // console.log(data);
  console.log("hello");
  return redirect(`/order/${data.id}`);
  // return null;
}

export default Order;
