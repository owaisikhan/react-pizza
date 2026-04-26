import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenu";

function useGetMenu() {
  const {
    data: pizzas,
    error,
    isPending: isMenuLoading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  return { pizzas, error, isMenuLoading };
}

export { useGetMenu };
