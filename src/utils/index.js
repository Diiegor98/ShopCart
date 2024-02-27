export const totalPrice = (products) => {
  let acumulador = 0;

  products.forEach((product) => (acumulador += product.price));

  return acumulador;
};
