import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartRow } from "../../services/apiCart";

export function useDeleteRow() {
  const queryClient = useQueryClient();
  const {
    mutate: deletePizzaRow,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationKey: ["cart"],
    mutationFn: deleteCartRow,

    onSuccess: (data) => {
      console.log(data);

      queryClient.invalidateQueries({ queryKey: [`pizza: ${data.name}`] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      // queryClient.removeQueries({ queryKey: [`pizza: ${data.name}`] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { deletePizzaRow, isDeleting, error };
}
