const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const currency = (number: number) => formatter.format(number);

export default currency;
