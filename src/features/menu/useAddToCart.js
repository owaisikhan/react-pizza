import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertIntoCart } from "../../services/apiCart";

function useAddToCart() {
  const querclient = useQueryClient();

  // write code for inserting in supabase a row in table "cart'" BEWLOW
  const {
    mutate: addToCart,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["cart"],
    mutationFn: insertIntoCart,
    onSuccess: (data) => {
      querclient.invalidateQueries({ queryKey: ["cart"] });
      querclient.invalidateQueries({ queryKey: [`pizza: ${data.name}`] });
    },

    onError: (error) => {
      console.log(error.message);
    },
  });

  return { addToCart, isPending, error };
}

export { useAddToCart };
