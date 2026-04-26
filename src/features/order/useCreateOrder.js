import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../services/apiOrder";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const { mutate: placeOrder, isPending: isPlacing } = useMutation({
    mutationFn: createOrder,
    mutationKey: ["orders"],
    onSuccess: (data) => {
      console.log("Order created successfully:", data);
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      console.error("Error creating order:", error);
    },
  });
  return { placeOrder, isPlacing };
}
