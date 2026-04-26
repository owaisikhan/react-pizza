import { DotLoader } from "react-spinners";
import MenuItem from "./MenuItem";
import { useGetMenu } from "./useGetMenu";
import Loader from "../../components/Loader";

export default function Menu() {
  // const pizzas = useLoaderData();

  // pizzas from supabase

  const { pizzas, isMenuLoading, error } = useGetMenu();
  // console.log(pizzas);

  if (isMenuLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <DotLoader />
      </div>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="bg-golden-sand-50 min-h-full py-8">
      <ul className="divide-golden-sand-200 bg-apricot-cream-50 shadow-mauve-bark-200 mx-auto mb-4 max-w-9/10 divide-y rounded-2xl px-4 py-4 shadow-lg md:grid-cols-2 lg:grid">
        {pizzas?.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}
