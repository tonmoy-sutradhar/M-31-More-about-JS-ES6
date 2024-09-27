const products = [
  { id: 1, name: "AsusVivoBook pro", price: 78000 },
  { id: 2, name: "MacBook pro", price: 178000 },
  { id: 3, name: "Lenovo ", price: 48000 },
  { id: 4, name: "Dell ", price: 28000 },
  { id: 5, name: "Xoxs ", price: 18000 },
];

const LaptopName = products.map((n) => n.name);
console.log(LaptopName);

// forEach--->(arrow function)
// products.forEach((n) => console.log(n.id));

// filter --->
const ProductPrice = products.filter((n) => n.price > 50000);
// console.log(ProductPrice);

// find --->(first lowest price laptop er value print korbe)
const lowPriceLaptop = products.find((n) => n.price < 20000);
console.log(lowPriceLaptop);

// reduce ---->
const reducePrice = products.reduce(
  (accumulator, current) => accumulator + current.price,
  0
);

console.log("Total Laptop Price --> ", reducePrice);
