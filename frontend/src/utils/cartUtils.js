export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate the items price,
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  // shipping price (if order is over $100 then free, else $10 shipping),
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  //  tax price (18%)
  state.taxPrice = addDecimals(Number(0.18 * state.itemsPrice).toFixed(2));
  // total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
