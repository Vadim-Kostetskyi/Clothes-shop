const getTotalPrice = (count: number, price: number): number =>
  Number((count * price).toFixed(2));

export { getTotalPrice };
