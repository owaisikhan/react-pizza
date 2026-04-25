import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementQuantity } from "../../services/apiCart";

export function useUpdateQuantity(queryKey) {
  const queryClient = useQueryClient();
  const {
    mutate: updatePizzaQuantity,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationKey: ["cart"],
    mutationFn: ({ name, quantity }) => incrementQuantity(name, quantity),

    onSuccess: (data) => {
      // console.log(data);
      queryClient.invalidateQueries({ queryKey: [`pizza: ${queryKey}`] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { updatePizzaQuantity, isUpdating, error };
}
