export function renderPrice(prices: number[] = []) {
  if (!prices.length || prices[0] == null) return null;

  const sorted = [...prices].sort((a, b) => a - b);

  let renderedPrice = `₾${sorted[0]}`;

  if (sorted.length > 1) {
    renderedPrice += ` - ₾${sorted[sorted.length - 1]}`;
  }

  return renderedPrice;
}
