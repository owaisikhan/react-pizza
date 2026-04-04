import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiPizza";
import MenuItem from "./MenuItem";

export default function Menu() {
  const pizzas = useLoaderData();
  // console.log(pizzas);
  return (
    <ul>
      {pizzas.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
