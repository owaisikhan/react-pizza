import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

export function useGetCart() {
  const {
    data: cart,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,

    throwOnError: (error) => {
      if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
    },
  });

  return { cart, error, isLoading };
}

export default useGetCart;
