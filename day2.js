const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    stock: 5
  },
  {
    id: 2,
    name: "Mobile",
    price: 25000,
    category: "Electronics",
    stock: 10
  },
  {
    id: 3,
    name: "Shoes",
    price: 3000,
    category: "Fashion",
    stock: 15
  },
  {
    id: 4,
    name: "Watch",
    price: 5000,
    category: "Fashion",
    stock: 8
  },
  {
    id: 5,
    name: "Headphones",
    price: 2000,
    category: "Electronics",
    stock: 20
  }
];

// 1. Display all products
function displayProducts() {
  products.forEach((product) => {
    console.log(
      `${product.id}. ${product.name} - ₹${product.price}`
    );
  });
}

// 2. Get products below ₹10000
function getAffordableProducts() {
  return products.filter((product) => {
    return product.price < 10000;
  });
}

// 3. Get only product names
function getProductNames() {
  return products.map((product) => {
    return product.name;
  });
}

// 4. Calculate total stock
function getTotalStock() {
  return products.reduce((total, product) => {
    return total + product.stock;
  }, 0);
}

// 5. Find product by ID
function findProduct(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

// 6. Get Electronics products
function getElectronics() {
  return products.filter((product) => {
    return product.category === "Electronics";
  });
}

// 7. Find most expensive product
function getMostExpensive() {
  return products.reduce((highest, product) => {
    return product.price > highest.price
      ? product
      : highest;
  });
}

// 8. Sort products by price
function sortByPrice() {
  return [...products].sort((a, b) => {
    return a.price - b.price;
  });
}


// ================= OUTPUT =================

console.log("===== ALL PRODUCTS =====");
displayProducts();

console.log("\n===== AFFORDABLE PRODUCTS =====");
console.log(getAffordableProducts());

console.log("\n===== PRODUCT NAMES =====");
console.log(getProductNames());

console.log("\n===== TOTAL STOCK =====");
console.log(getTotalStock());

console.log("\n===== FIND PRODUCT =====");
console.log(findProduct(3));

console.log("\n===== ELECTRONICS =====");
console.log(getElectronics());

console.log("\n===== MOST EXPENSIVE =====");
console.log(getMostExpensive());

console.log("\n===== SORTED BY PRICE =====");
console.log(sortByPrice());