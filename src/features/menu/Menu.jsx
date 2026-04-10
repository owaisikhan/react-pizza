import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiPizza";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

export default function Menu() {
  const pizzas = useLoaderData();
  // const rate = useSelector(getRate);
  // console.log(rate);
  return (
    <div className="bg-golden-sand-50 min-h-full py-8">
      <ul className="divide-golden-sand-200 bg-apricot-cream-50 shadow-mauve-bark-200 mx-auto mb-4 max-w-9/10 divide-y rounded-2xl px-4 py-4 shadow-lg md:grid-cols-2 lg:grid">
        {pizzas.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
