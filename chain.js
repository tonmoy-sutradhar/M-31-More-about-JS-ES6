// data access

const data = [{ id: 1, name: "Tonmoy", address: "Tangil" }];
// console.log(data[0].address);

// ----->>
const products = {
  count: 500,
  data: [
    { id: 1, name: "ASUS VivoBook", price: 78000 },
    { id: 2, name: "MacBook Pro", price: 178000 },
  ],
};

// console.log(products.data[1].name);

// ---->>
const user = {
  id: 10001,
  name: "Tonmoy sutradhar",
  address: {
    street: {
      first: "Tangail",
      second: "Dhaka",
      third: "AIUB",
    },
  },
  city: "Dhaka",
};

// ----
const user2 = {
  id: 10001,
  name: "Tonmoy sutradhar",
  address: "Dhaka, Bangladesh",
  city: "Dhaka",
};
console.log(user.address.street.third);

// ? mane holo er pore value r exicute hbe nah
console.log(user2.address.street?.third);
