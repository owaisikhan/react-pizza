import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";

function useGetMenu() {
  const { data: pizzas, error } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return { pizzas, error };
}

export { useGetMenu };
