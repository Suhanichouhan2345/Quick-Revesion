// ==========================================
//       E-COMMERCE INVENTORY SYSTEM
// ==========================================

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        stock: 12,
        rating: 4.5
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 28000,
        stock: 20,
        rating: 4.3
    },
    {
        id: 3,
        name: "Headphones",
        category: "Accessories",
        price: 2500,
        stock: 35,
        rating: 4.1
    },
    {
        id: 4,
        name: "Keyboard",
        category: "Accessories",
        price: 1800,
        stock: 25,
        rating: 4.4
    },
    {
        id: 5,
        name: "Running Shoes",
        category: "Fashion",
        price: 3200,
        stock: 18,
        rating: 4.6
    },
    {
        id: 6,
        name: "Backpack",
        category: "Fashion",
        price: 1600,
        stock: 30,
        rating: 4.2
    },
    {
        id: 7,
        name: "Monitor",
        category: "Electronics",
        price: 15000,
        stock: 8,
        rating: 4.7
    },
    {
        id: 8,
        name: "Mouse",
        category: "Accessories",
        price: 900,
        stock: 45,
        rating: 4.0
    }
];


// ==========================================
// 1. DISPLAY ALL PRODUCTS
// ==========================================

function displayProducts() {

    console.log("\n===== ALL PRODUCTS =====");

    products.forEach((product) => {

        console.log(
            `${product.id}. ${product.name} - ₹${product.price} - Stock: ${product.stock}`
        );

    });
}

displayProducts();


// ==========================================
// 2. FIND PRODUCT BY ID
// ==========================================

function findProduct(id) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (product) {

        console.log("\n===== PRODUCT FOUND =====");
        console.log(product);

    } else {

        console.log("\nProduct not found");

    }
}

findProduct(3);


// ==========================================
// 3. SEARCH PRODUCT
// ==========================================

function searchProduct(keyword) {

    const result = products.filter((product) => {

        return product.name
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\n===== SEARCH RESULT =====");
    console.log(result);

}

searchProduct("phone");


// ==========================================
// 4. FILTER BY CATEGORY
// ==========================================

function filterByCategory(category) {

    const result = products.filter((product) => {

        return product.category === category;

    });

    console.log(`\n===== ${category.toUpperCase()} =====`);
    console.log(result);

}

filterByCategory("Electronics");


// ==========================================
// 5. PRODUCTS ABOVE ₹5000
// ==========================================

function expensiveProducts() {

    const result = products.filter((product) => {

        return product.price > 5000;

    });

    console.log("\n===== EXPENSIVE PRODUCTS =====");
    console.log(result);

}

expensiveProducts();


// ==========================================
// 6. PRODUCTS BELOW ₹2000
// ==========================================

function cheapProducts() {

    const result = products.filter((product) => {

        return product.price < 2000;

    });

    console.log("\n===== CHEAP PRODUCTS =====");
    console.log(result);

}

cheapProducts();


// ==========================================
// 7. LOW STOCK PRODUCTS
// ==========================================

function lowStockProducts() {

    const result = products.filter((product) => {

        return product.stock < 10;

    });

    console.log("\n===== LOW STOCK =====");
    console.log(result);

}

lowStockProducts();


// ==========================================
// 8. GET PRODUCT NAMES
// ==========================================

function getProductNames() {

    const names = products.map((product) => {

        return product.name;

    });

    console.log("\n===== PRODUCT NAMES =====");
    console.log(names);

}

getProductNames();


// ==========================================
// 9. CALCULATE INVENTORY VALUE
// ==========================================

function inventoryValue() {

    const total = products.reduce((sum, product) => {

        return sum + (product.price * product.stock);

    }, 0);

    console.log(
        "\nTotal Inventory Value:",
        `₹${total}`
    );

}

inventoryValue();


// ==========================================
// 10. AVERAGE PRODUCT PRICE
// ==========================================

function averagePrice() {

    const total = products.reduce((sum, product) => {

        return sum + product.price;

    }, 0);

    const average = total / products.length;

    console.log(
        "\nAverage Product Price:",
        `₹${average.toFixed(2)}`
    );

}

averagePrice();


// ==========================================
// 11. HIGHEST PRICED PRODUCT
// ==========================================

function highestPrice() {

    const product = products.reduce((max, current) => {

        return current.price > max.price
            ? current
            : max;

    });

    console.log("\n===== MOST EXPENSIVE =====");
    console.log(product);

}

highestPrice();


// ==========================================
// 12. HIGHEST RATED PRODUCT
// ==========================================

function highestRating() {

    const product = products.reduce((max, current) => {

        return current.rating > max.rating
            ? current
            : max;

    });

    console.log("\n===== HIGHEST RATED =====");
    console.log(product);

}

highestRating();


// ==========================================
// 13. SORT PRICE LOW TO HIGH
// ==========================================

function sortPriceLowToHigh() {

    const sorted = [...products].sort((a, b) => {

        return a.price - b.price;

    });

    console.log("\n===== PRICE LOW TO HIGH =====");
    console.log(sorted);

}

sortPriceLowToHigh();


// ==========================================
// 14. SORT RATING HIGH TO LOW
// ==========================================

function sortRatingHighToLow() {

    const sorted = [...products].sort((a, b) => {

        return b.rating - a.rating;

    });

    console.log("\n===== RATING HIGH TO LOW =====");
    console.log(sorted);

}

sortRatingHighToLow();


// ==========================================
// 15. CHECK STOCK
// ==========================================

function checkStock(id, quantity) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("\nProduct not found");
        return;

    }

    if (product.stock >= quantity) {

        console.log(
            `\n${quantity} ${product.name} available`
        );

    } else {

        console.log(
            `\nOnly ${product.stock} items available`
        );

    }
}

checkStock(1, 5);


// ==========================================
// 16. ADD PRODUCT
// ==========================================

function addProduct(
    name,
    category,
    price,
    stock,
    rating
) {

    const newProduct = {

        id: products.length + 1,
        name: name,
        category: category,
        price: price,
        stock: stock,
        rating: rating

    };

    products.push(newProduct);

    console.log("\n===== PRODUCT ADDED =====");
    console.log(newProduct);

}

addProduct(
    "Tablet",
    "Electronics",
    22000,
    15,
    4.4
);


// ==========================================
// 17. UPDATE STOCK
// ==========================================

function updateStock(id, newStock) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("\nProduct not found");
        return;

    }

    product.stock = newStock;

    console.log("\n===== STOCK UPDATED =====");
    console.log(product);

}

updateStock(4, 40);


// ==========================================
// 18. DELETE PRODUCT
// ==========================================

function deleteProduct(id) {

    const index = products.findIndex((product) => {

        return product.id === id;

    });

    if (index === -1) {

        console.log("\nProduct not found");
        return;

    }

    const deleted = products.splice(index, 1);

    console.log("\n===== PRODUCT DELETED =====");
    console.log(deleted[0]);

}

deleteProduct(8);


// ==========================================
// 19. SHOPPING CART
// ==========================================

let cart = [];

function addToCart(id, quantity) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("\nProduct not found");
        return;

    }

    if (product.stock < quantity) {

        console.log("\nNot enough stock");
        return;

    }

    const existingItem = cart.find((item) => {

        return item.productId === id;

    });

    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({

            productId: id,
            name: product.name,
            price: product.price,
            quantity: quantity

        });

    }

    product.stock -= quantity;

    console.log(
        `\n${quantity} ${product.name} added to cart`
    );
}

addToCart(1, 2);
addToCart(3, 3);
addToCart(5, 1);


// ==========================================
// 20. DISPLAY CART
// ==========================================

function displayCart() {

    console.log("\n===== SHOPPING CART =====");

    cart.forEach((item) => {

        console.log(
            `${item.name} | ₹${item.price} | Qty: ${item.quantity}`
        );

    });

}

displayCart();


// ==========================================
// 21. CART TOTAL
// ==========================================

function cartTotal() {

    const total = cart.reduce((sum, item) => {

        return sum + (item.price * item.quantity);

    }, 0);

    console.log("\nCart Total:", `₹${total}`);

    return total;
}

cartTotal();


// ==========================================
// 22. APPLY DISCOUNT
// ==========================================

function applyDiscount(total) {

    let discount = 0;

    if (total >= 50000) {

        discount = total * 0.20;

    } else if (total >= 30000) {

        discount = total * 0.15;

    } else if (total >= 10000) {

        discount = total * 0.10;

    }

    const finalAmount = total - discount;

    console.log("\n===== DISCOUNT =====");
    console.log("Original Amount:", `₹${total}`);
    console.log("Discount:", `₹${discount}`);
    console.log("Final Amount:", `₹${finalAmount}`);

    return finalAmount;
}

const totalAmount = cartTotal();

applyDiscount(totalAmount);


// ==========================================
// 23. CHECK IF ANY PRODUCT OUT OF STOCK
// ==========================================

function checkOutOfStock() {

    const result = products.some((product) => {

        return product.stock === 0;

    });

    console.log(
        "\nAny product out of stock?",
        result
    );

}

checkOutOfStock();


// ==========================================
// 24. CHECK ALL PRODUCTS HAVE RATING
// ==========================================

function checkRatings() {

    const result = products.every((product) => {

        return product.rating > 0;

    });

    console.log(
        "\nAll products have ratings?",
        result
    );

}

checkRatings();


// ==========================================
// 25. FINAL STORE REPORT
// ==========================================

function storeReport() {

    const totalProducts = products.length;

    const totalStock = products.reduce((sum, product) => {

        return sum + product.stock;

    }, 0);

    const totalValue = products.reduce((sum, product) => {

        return sum + (product.price * product.stock);

    }, 0);

    const bestProduct = products.reduce((best, product) => {

        return product.rating > best.rating
            ? product
            : best;

    });

    console.log("\n");
    console.log("======================================");
    console.log("          STORE FINAL REPORT");
    console.log("======================================");

    console.log("Total Products :", totalProducts);
    console.log("Total Stock    :", totalStock);
    console.log("Inventory Value:", `₹${totalValue}`);
    console.log("Best Rated     :", bestProduct.name);
    console.log("Rating         :", bestProduct.rating);

    console.log("======================================");
    console.log("       E-COMMERCE SYSTEM DONE");
    console.log("======================================");
}

storeReport();