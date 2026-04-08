import { useFetcher, useLoaderData } from "react-router";
import { getOrder } from "../../services/apiPizza";
import { useEffect, useState } from "react";

// const orderID = "IIDSAT";

function OrderOverview() {
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  //  fetcher?.data?.find((menuItem) => item.pizzaId === menuItem.id)
  //             ?.ingredients ?? []

  fetcher?.data && console.log(fetcher?.data[0].ingredients);

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

  // console.log(order);
  return (
    <div className="mx-auto flex h-full max-w-4xl flex-col gap-8 px-8 pt-6">
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
      <div className="text-md mb-2 flex justify-between gap-4 rounded-xl bg-stone-300 px-3 py-6">
        <p className="">Only 40 minutes until delivery😊</p>
        <p>Estimated Delivery: {estimatedDelivery.split("T")[0]}</p>
      </div>
      <div className="d divide-y divide-stone-400 border-y border-stone-400">
        {cart.map((item) => {
          const { name, quantity, totalPrice, pizzaId } = item;
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
                  {fetcher.data
                    ?.find((menuItem) => pizzaId === menuItem.id)
                    .ingredients.join(", ") ?? []}
                </span>
              </p>
              <p className="font-bold">${totalPrice}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col justify-around gap-4 rounded-xl bg-stone-300 px-4 py-2">
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
