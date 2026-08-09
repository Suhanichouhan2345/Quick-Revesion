const cart = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    quantity: 1
  },
  {
    id: 2,
    name: "Mouse",
    price: 800,
    quantity: 2
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
    quantity: 1
  },
  {
    id: 4,
    name: "Headphones",
    price: 2500,
    quantity: 2
  }
];

// 1. Display cart
function displayCart() {
  cart.forEach((item) => {
    console.log(
      `${item.name} | ₹${item.price} | Quantity: ${item.quantity}`
    );
  });
}

// 2. Calculate price of each item
function calculateItemPrices() {
  return cart.map((item) => {
    return {
      name: item.name,
      total: item.price * item.quantity
    };
  });
}

// 3. Calculate total cart value
function getCartTotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// 4. Find product by ID
function findProduct(id) {
  return cart.find((item) => {
    return item.id === id;
  });
}

// 5. Get products having quantity greater than 1
function getMultipleItems() {
  return cart.filter((item) => {
    return item.quantity > 1;
  });
}

// 6. Find most expensive product
function getExpensiveProduct() {
  return cart.reduce((expensive, item) => {
    return item.price > expensive.price
      ? item
      : expensive;
  });
}

// 7. Sort products by price
function sortByPrice() {
  return [...cart].sort((a, b) => {
    return b.price - a.price;
  });
}

// 8. Check if laptop exists
function isLaptopInCart() {
  return cart.some((item) => {
    return item.name === "Laptop";
  });
}

// 9. Remove product
function removeProduct(id) {
  const index = cart.findIndex((item) => {
    return item.id === id;
  });

  if (index !== -1) {
    cart.splice(index, 1);
    console.log("Product removed successfully!");
  } else {
    console.log("Product not found!");
  }
}


// ================= OUTPUT =================

console.log("===== CART =====");
displayCart();

console.log("\n===== ITEM TOTALS =====");
console.log(calculateItemPrices());

console.log("\n===== CART TOTAL =====");
console.log("₹" + getCartTotal());

console.log("\n===== FIND PRODUCT =====");
console.log(findProduct(2));

console.log("\n===== MULTIPLE ITEMS =====");
console.log(getMultipleItems());

console.log("\n===== MOST EXPENSIVE PRODUCT =====");
console.log(getExpensiveProduct());

console.log("\n===== SORTED BY PRICE =====");
console.log(sortByPrice());

console.log("\n===== LAPTOP IN CART =====");
console.log(isLaptopInCart());

console.log("\n===== REMOVE PRODUCT =====");
removeProduct(3);

console.log("\n===== UPDATED CART =====");
displayCart();