exports.calculateDiscount = (bill, discount) =>
  Math.round(bill - (bill * discount) / 100);
