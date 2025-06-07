export function formatToDollar({
  amount,
  decimalPlaces = 0,
}: {
  amount: number | string;
  decimalPlaces?: number;
}): string {
  // Remove commas if amount is a string
  const cleaned =
    typeof amount === "string" ? amount.replace(/,/g, "") : amount;
  const num = Number(cleaned);

  if (isNaN(num)) {
    return "$0.00";
  }

  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
}
