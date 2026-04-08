import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiPizza";
import MenuItem from "./MenuItem";

export default function Menu() {
  const pizzas = useLoaderData();
  return (
    <div className="bg-slate-blue-100 min-h-full py-8">
      <ul className="bg-linear-from-slate-blue-100 to-slate-blue-900 spacing-x-2 divide-slate-blue-600 bg-slate-blue-950 shadow-slate-blue-950 mx-auto mb-4 max-w-9/10 divide-y rounded-2xl bg-linear-to-r/increasing px-4 py-4 shadow-lg md:grid-cols-2 lg:grid">
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
