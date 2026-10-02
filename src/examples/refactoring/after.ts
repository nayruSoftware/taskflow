export function finalPrice(price: number, tax: number, discount: number) {
  const taxAmount = price * tax;
  const discountAmount = price * discount;

  return price + taxAmount - discountAmount;
}
