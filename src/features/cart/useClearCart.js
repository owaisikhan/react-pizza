import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart as clearCartAPI } from "../../services/apiCart";

function useClearCart() {
  const queryClient = useQueryClient();

  const { mutate: clearCart, isPending: isClearingCart } = useMutation({
    mutationFn: clearCartAPI,
    onSuccess: () => {
      // invalidate the cart query to refetch the cart data
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.error(error.message);
      throw new Error(error.message);
    },
  });

  return { clearCart, isClearingCart };
}

export { useClearCart };
