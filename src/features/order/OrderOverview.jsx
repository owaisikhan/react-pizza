import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiPizza";

// const orderID = "IIDSAT";

function OrderOverview() {
  const order = useLoaderData();
  const {
    cart,
    status,
    priority,
    id,
    estimatedDelivery,
    orderPrice,
    priorityPrice,
  } = order;

  console.log(order);
  return (
    <div className="mx-auto flex h-full max-w-xl flex-col gap-4">
      <div className="mt-4 flex flex-wrap justify-between gap-4">
        <p className="text-xl font-bold">Order# {id} - Status</p>
        <p className="space-x-4">
          {priority && (
            <span className="rounded-2xl border border-stone-500 bg-red-700 px-2.5 py-1 text-sm font-bold text-stone-100 uppercase">
              priority
            </span>
          )}

          <span className="rounded-2xl border border-stone-500 bg-green-700 px-2.5 py-1 text-sm font-bold text-stone-100 uppercase">
            {status}
          </span>
        </p>
      </div>
      <div className="mb-2 flex justify-between gap-4 bg-stone-200 px-2 py-4 text-sm">
        <p className="">Only 40 minutes until delivery😊</p>
        <p>Estimated Delivery: {estimatedDelivery.split("T")[0]}</p>
      </div>
      <div className="d divide-y divide-stone-500 border-y border-stone-500">
        {cart.map((item) => {
          const { name, quantity, totalPrice, pizzaId, ingredients } = item;
          return (
            <div
              key={pizzaId}
              className="flex items-center justify-between text-sm"
            >
              <p className="mt-2 mb-2 flex flex-col text-sm">
                <span>
                  {quantity}&times; {name}
                </span>
                <span className="text-sm text-stone-500">
                  {ingredients} Add Later
                </span>
              </p>
              <p className="font-bold">${totalPrice}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col justify-around gap-4 bg-stone-200 px-4 py-2">
        <div className="flex justify-between">
          <p>Price pizza: </p>
          <span>${orderPrice}</span>
        </div>
        <div className="flex justify-between">
          <p>Price priority: </p>
          <span>${priorityPrice}</span>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">To pay on delivery:</p>
          <span>${orderPrice + priorityPrice}</span>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderID);
  return order;
}

export default OrderOverview;
