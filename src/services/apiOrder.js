import supabase from "./supabase";

export async function createOrder(newOrder) {
  //send this order to order table in supabase
  const { data, error } = await supabase
    .from("orders")
    .insert([newOrder]) // new order is an object
    .select();
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getOrdersByUserId(userId) {
  const { data } = await supabase.from("orders").select("*").eq("id", userId);

  return data;
}
