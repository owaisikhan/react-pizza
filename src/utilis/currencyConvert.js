const API = "https://api.frankfurter.dev/v2/rate/USD/PKR";

async function currencyConversion(amount) {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Failed to convert currency");
  const data = await res.json();
  return Math.floor(data.rate * amount);
}

export default currencyConversion;
