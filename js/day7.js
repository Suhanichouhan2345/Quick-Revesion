const products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics", quantity: 1 },
  { id: 2, name: "Mouse", price: 800, category: "Electronics", quantity: 2 },
  { id: 3, name: "Shoes", price: 2500, category: "Fashion", quantity: 1 },
  { id: 4, name: "T-Shirt", price: 900, category: "Fashion", quantity: 3 },
  { id: 5, name: "Keyboard", price: 1800, category: "Electronics", quantity: 1 }
];

// 1. Calculate price of each product
const itemTotals = products.map(product => {
  return {
    name: product.name,
    total: product.price * product.quantity
  };
});

console.log("Item Totals:");
console.log(itemTotals);


// 2. Calculate total cart value
const cartTotal = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log("\nCart Total:", cartTotal);


// 3. Find Electronics products
const electronics = products.filter(product => {
  return product.category === "Electronics";
});

console.log("\nElectronics:");
console.log(electronics);


// 4. Find products costing more than 2000
const expensiveProducts = products.filter(product => {
  return product.price > 2000;
});

console.log("\nExpensive Products:");
console.log(expensiveProducts);


// 5. Search product by ID
const searchId = 3;

const searchedProduct = products.find(product => {
  return product.id === searchId;
});

console.log("\nSearched Product:");
console.log(searchedProduct);


// 6. Check if any product has quantity greater than 2
const bulkProduct = products.some(product => {
  return product.quantity > 2;
});

console.log("\nAny Bulk Product:", bulkProduct);


// 7. Sort products by price
const sortedProducts = [...products].sort((a, b) => {
  return b.price - a.price;
});

console.log("\nProducts Sorted By Price:");
console.log(sortedProducts);


// 8. Count total items
const totalItems = products.reduce((count, product) => {
  return count + product.quantity;
}, 0);

console.log("\nTotal Items:", totalItems);


// 9. Apply 10% discount
const discountedProducts = products.map(product => {
  return {
    ...product,
    discountedPrice: product.price * 0.90
  };
});

console.log("\nDiscounted Products:");
console.log(discountedProducts);


// 10. Generate cart summary
const summary = {
  totalProducts: products.length,
  totalItems: totalItems,
  cartValue: cartTotal,
  mostExpensive: sortedProducts[0].name
};

console.log("\nCart Summary:");
console.log(summary);