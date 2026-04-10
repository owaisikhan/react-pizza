const URL = "https://react-fast-pizza-api.jonas.io/api";

export async function getMenu() {
  const res = await fetch(`${URL}/menu`);
  if (!res.ok) {
    if (res.status === 429)
      throw new Error(
        "Too many requests — please wait a moment and try again.",
      );
    throw new Error("Failed to fetch menu");
  }
  const { data } = await res.json();
  return data;
}

export async function getOrder(orderID) {
  const res = await fetch(`${URL}/order/${orderID}`);
  if (!res.ok) {
    if (res.status === 429)
      throw new Error(
        "Too many requests — please wait a moment and try again.",
      );
    throw new Error("Failed to fetch order");
  }
  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  const res = await fetch(`${URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrder),
  });

  const { data } = await res.json();
  // console.log(data);
  return data;
}
