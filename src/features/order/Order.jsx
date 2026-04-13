import { Form, redirect } from "react-router";
import Button from "../../components/Button";
import { createOrder } from "../../services/apiPizza";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { clearCart } from "../cart/cartSlice";

function Order() {
  const userName = useSelector((state) => state.user.name);
  const cart = useSelector((state) => state.cart.cart);

  const inputClass =
    "mx-2 flex-1 rounded-2xl border-2 border-golden-sand-300 bg-golden-sand-50 px-4 py-2 text-mauve-bark-900 placeholder:text-mauve-bark-400 transition-all duration-300 focus:border-burnt-peach-400 focus:outline-none";

  return (
    <Form
      method="post"
      className="mx-auto mt-8 flex max-w-2xl flex-col gap-5 px-6 pb-10"
    >
      <p className="text-mauve-bark-900 mb-2 text-2xl font-bold">
        Ready to Order! Let's Go
      </p>

      <div className="flex items-center gap-4">
        <label
          className="text-mauve-bark-700 w-30 text-sm font-medium"
          htmlFor="customer"
        >
          First Name
        </label>
        <input
          type="text"
          id="customer"
          name="customer"
          placeholder="Your name"
          defaultValue={userName}
          required
          className={inputClass}
        />
      </div>

      <div className="flex w-full items-center gap-4">
        <label
          className="text-mauve-bark-700 w-30 text-sm font-medium"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Phone number"
          required
          className={inputClass}
        />
      </div>

      <div className="flex w-full items-center gap-4">
        <label
          className="text-mauve-bark-700 w-30 text-sm font-medium"
          htmlFor="address"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Delivery address"
          required
          className={inputClass}
        />
      </div>

      <div className="mb-2 flex items-center gap-4">
        <input
          type="checkbox"
          name="priority"
          id="Priority"
          className="border-apricot-cream-400 bg-apricot-cream-50 checked:border-burnt-peach-500 checked:bg-burnt-peach-500 size-5 cursor-pointer appearance-none rounded-md border-2 transition-all duration-150 checked:scale-110 checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M3%208l3.5%203.5L13%204.5%22%2F%3E%3C%2Fsvg%3E')] checked:bg-center checked:bg-no-repeat focus-visible:outline-none active:scale-90"
        />
        <label
          htmlFor="Priority"
          className="text-mauve-bark-700 text-sm font-medium"
        >
          Want to give your Order Priority?
          <span className="bg-apricot-cream-100 text-apricot-cream-700 ml-2 rounded-full px-2 py-0.5 text-xs">
            +20% cost
          </span>
        </label>
      </div>

      <input type="hidden" name="cart" value={JSON.stringify(cart)} />

      <span className="self-center">
        <Button type="base">Order Now</Button>
      </span>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const parsedData = Object.fromEntries(formData);
  const newOrder = {
    ...parsedData,
    priority: parsedData.priority === "on",
    cart: JSON.parse(parsedData.cart),
  };
  const data = await createOrder(newOrder);

  store.dispatch(clearCart());

  return redirect(`/order/${data.id}`);
}

export default Order;
