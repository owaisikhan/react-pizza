import { useFetcher, useLoaderData } from "react-router";
import { getOrder } from "../../services/apiPizza";
import { useEffect } from "react";

function OrderOverview() {
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

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

  return (
    <div className="bg-golden-sand-50 mx-auto flex min-h-full max-w-4xl flex-col gap-8 px-8 py-8">
      <div className="mt-4 flex flex-wrap justify-between gap-4">
        <p className="text-mauve-bark-900 text-xl font-bold">
          Order# {id} — Status
        </p>
        <p className="space-x-3">
          {priority && (
            <span className="bg-apricot-cream-500 text-golden-sand-50 rounded-2xl px-2.5 py-1 text-sm font-bold uppercase">
              priority
            </span>
          )}
          <span className="bg-burnt-peach-500 text-golden-sand-50 rounded-2xl px-2.5 py-1 text-sm font-bold uppercase">
            {status}
          </span>
        </p>
      </div>

      <div className="bg-mauve-bark-700 text-md text-golden-sand-100 flex justify-between gap-4 rounded-xl px-4 py-6">
        <p>Only 40 minutes until delivery 😊</p>
        <p className="text-golden-sand-300">
          Estimated Delivery: {estimatedDelivery.split("T")[0]}
        </p>
      </div>

      <div className="divide-golden-sand-200 border-golden-sand-200 divide-y border-y">
        {cart.map((item) => {
          const { name, quantity, totalPrice, pizzaId } = item;
          return (
            <div
              key={pizzaId}
              className="flex items-center justify-between py-3 text-sm"
            >
              <p className="flex flex-col">
                <span className="text-mauve-bark-900 font-medium">
                  {quantity}&times; {name}
                </span>
                <span className="text-mauve-bark-500 text-sm">
                  {fetcher.data
                    ?.find((menuItem) => pizzaId === menuItem.id)
                    .ingredients.join(", ") ?? []}
                </span>
              </p>
              <p className="text-burnt-peach-600 font-bold">${totalPrice}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-mauve-bark-800 mt-4 flex flex-col justify-around gap-4 rounded-xl px-4 py-6">
        <div className="text-golden-sand-200 flex justify-between">
          <p>Price pizza:</p>
          <span>${orderPrice}</span>
        </div>
        <div className="text-golden-sand-200 flex justify-between">
          <p>Price priority:</p>
          <span>${priorityPrice}</span>
        </div>
        <div className="border-mauve-bark-600 flex justify-between border-t pt-3">
          <p className="text-golden-sand-100 font-semibold">
            To pay on delivery:
          </p>
          <span className="text-golden-sand-100 font-bold">
            ${orderPrice + priorityPrice}
          </span>
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
