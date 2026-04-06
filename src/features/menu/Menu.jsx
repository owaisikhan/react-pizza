import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiPizza";
import MenuItem from "./MenuItem";

export default function Menu() {
  const pizzas = useLoaderData();
  // console.log(pizzas);
  return (
    <ul className="spacing-x-2 mx-auto mb-4 max-w-9/10 divide-y divide-stone-500 px-4 py-4 md:grid-cols-2 lg:grid">
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
