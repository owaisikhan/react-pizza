import { useQuery } from "@tanstack/react-query";
import { getOrdersByUserId } from "../../services/apiOrder";

export function useGetOrderById(orderID) {
  //query into supabase to get order by id

  const {
    data: orderData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrdersByUserId(orderID),
  });

  if (error) {
    console.log(error);
  }

  return { orderData, isPending, error };
}
