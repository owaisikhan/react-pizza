import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartRow } from "../../services/apiCart";

export function useDeleteRow(queryKey) {
  const queryClient = useQueryClient();
  const {
    mutate: deletePizzaRow,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationKey: ["cart"],
    mutationFn: deleteCartRow,

    onSuccess: (data) => {
      // console.log(data);
      queryClient.removeQueries({ queryKey: [`pizza: ${queryKey}`] });

      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { deletePizzaRow, isDeleting, error };
}
