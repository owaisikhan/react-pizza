import supabase from "./supabase";

export async function getMenu() {
  // import from supabase
  const { data: pizzas, error } = await supabase.from("menu").select("*");
  if (error) {
    throw new Error("Failed to fetch menu");
  }
  return pizzas;
}
