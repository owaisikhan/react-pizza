import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiPizza";

// const orderID = "IIDSAT";

function OrderOverview() {
  const order = useLoaderData();
  const { cart, status, priority } = order;

  //   console.log(order);
  return (
    <div>
      <span>{status}</span>
      <span>{priority && "priority"}</span>
      <div>
        {cart.map((item) => {
          const { name, quantity, totalPrice, pizzaId } = item;
          return (
            <div key={pizzaId}>
              <p>{name}</p>
              <p>Quantity: {quantity}</p>
              <p>{totalPrice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderID);
  return order;
}

export default OrderOverview;
