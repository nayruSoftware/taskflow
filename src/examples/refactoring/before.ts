export function finalPrice(price: number, tax: number, discount: number) {
  return price + price * tax - price * discount;
}
