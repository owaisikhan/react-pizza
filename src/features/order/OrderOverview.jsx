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
    <div className="bg-slate-blue-100 text-slate-blue-900 mx-auto flex min-h-full max-w-4xl flex-col gap-8 px-8 py-8">
      <div className="mt-4 flex flex-wrap justify-between gap-4">
        <p className="text-xl font-bold">Order# {id} - Status</p>
        <p className="space-x-4">
          {priority && (
            <span className="border-slate-blue-500 text-slate-blue-50 rounded-2xl border bg-orange-600 px-2.5 py-1 text-sm font-bold uppercase">
              priority
            </span>
          )}
          <span className="border-slate-blue-500 text-slate-blue-50 rounded-2xl border bg-emerald-600 px-2.5 py-1 text-sm font-bold uppercase">
            {status}
          </span>
        </p>
      </div>

      <div className="text-md bg-slate-blue-800 text-slate-blue-100 mb-2 flex justify-between gap-4 rounded-xl px-3 py-6">
        <p>Only 40 minutes until delivery😊</p>
        <p className="text-slate-blue-300">
          Estimated Delivery: {estimatedDelivery.split("T")[0]}
        </p>
      </div>

      <div className="divide-slate-blue-700 border-slate-blue-700 divide-y border-y">
        {cart.map((item) => {
          const { name, quantity, totalPrice, pizzaId } = item;
          return (
            <div
              key={pizzaId}
              className="flex items-center justify-between text-sm"
            >
              <p className="mt-2 mb-2 flex flex-col text-sm">
                <span className="">
                  {quantity}&times; {name}
                </span>
                <span className="text-slate-blue-400 text-sm">
                  {fetcher.data
                    ?.find((menuItem) => pizzaId === menuItem.id)
                    .ingredients.join(", ") ?? []}
                </span>
              </p>
              <p className="text-slate-blue-100 font-bold">${totalPrice}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-blue-800 py- mt-4 flex flex-col justify-around gap-4 rounded-xl px-4 py-6">
        <div className="text-slate-blue-200 flex justify-between">
          <p>Price pizza:</p>
          <span>${orderPrice}</span>
        </div>
        <div className="text-slate-blue-200 flex justify-between">
          <p>Price priority:</p>
          <span>${priorityPrice}</span>
        </div>
        <div className="border-slate-blue-600 flex justify-between border-t pt-2">
          <p className="text-slate-blue-50 font-semibold">
            To pay on delivery:
          </p>
          <span className="text-slate-blue-50 font-bold">
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
