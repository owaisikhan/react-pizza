import supabase from "./supabase";

export async function getCart() {
  let { data, error } = await supabase.from("cart").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function getCartRow(name) {
  let { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("name", name)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}

export async function incrementQuantity(pizzaName, pizzaQuantity) {
  const { data, error } = await supabase
    .from("cart")
    .update({ quantity: pizzaQuantity })
    .eq("name", pizzaName)
    .select()
    .single();
  if (error) throw new Error(error.message);

  return data;
}

export async function insertIntoCart(newCartItem) {
  const { data, error } = await supabase
    .from("cart")
    .insert([newCartItem])
    .select()
    .single();
  if (error) throw new Error(error.message);

  return data;
}

// create a function to delete a row from cart table
export async function deleteCartRow(pizzaName) {
  const { data, error } = await supabase
    .from("cart")
    .delete()
    .eq("name", pizzaName)
    .select()
    .single();
  if (error) throw new Error(error.message);

  return data;
}
