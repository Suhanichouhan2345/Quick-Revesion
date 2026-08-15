// E-Commerce Product Management System
// JavaScript Practice - Day 18

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        brand: "HP",
        price: 65000,
        stock: 12,
        rating: 4.5,
        sold: 120
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        brand: "Samsung",
        price: 35000,
        stock: 25,
        rating: 4.3,
        sold: 250
    },
    {
        id: 3,
        name: "Headphones",
        category: "Accessories",
        brand: "Boat",
        price: 2500,
        stock: 50,
        rating: 4.1,
        sold: 500
    },
    {
        id: 4,
        name: "Keyboard",
        category: "Accessories",
        brand: "Logitech",
        price: 1800,
        stock: 35,
        rating: 4.4,
        sold: 180
    },
    {
        id: 5,
        name: "Running Shoes",
        category: "Fashion",
        brand: "Nike",
        price: 5500,
        stock: 20,
        rating: 4.6,
        sold: 320
    },
    {
        id: 6,
        name: "Watch",
        category: "Fashion",
        brand: "Titan",
        price: 7500,
        stock: 15,
        rating: 4.7,
        sold: 210
    }
];

// ---------------------------------------
// 1. Display All Products
// ---------------------------------------

function displayProducts() {

    console.log("\n========== ALL PRODUCTS ==========");

    products.forEach((product) => {

        console.log(
            `${product.id}. ${product.name} - ₹${product.price}`
        );

    });
}

displayProducts();


// ---------------------------------------
// 2. Find Product By ID
// ---------------------------------------

function findProduct(id) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("Product not found");
        return;

    }

    console.log("\n========== PRODUCT FOUND ==========");
    console.log(product);
}

findProduct(3);


// ---------------------------------------
// 3. Filter By Category
// ---------------------------------------

function getProductsByCategory(category) {

    const result = products.filter((product) => {

        return product.category.toLowerCase() ===
            category.toLowerCase();

    });

    console.log(`\nProducts in ${category}:`);
    console.log(result);
}

getProductsByCategory("Electronics");


// ---------------------------------------
// 4. Products Under Given Price
// ---------------------------------------

function productsUnderPrice(price) {

    const result = products.filter((product) => {

        return product.price < price;

    });

    console.log(`\nProducts under ₹${price}:`);
    console.log(result);
}

productsUnderPrice(10000);


// ---------------------------------------
// 5. Highest Price Product
// ---------------------------------------

const expensiveProduct = products.reduce((highest, product) => {

    return product.price > highest.price
        ? product
        : highest;

});

console.log("\n========== MOST EXPENSIVE ==========");
console.log(expensiveProduct);


// ---------------------------------------
// 6. Cheapest Product
// ---------------------------------------

const cheapestProduct = products.reduce((lowest, product) => {

    return product.price < lowest.price
        ? product
        : lowest;

});

console.log("\n========== CHEAPEST PRODUCT ==========");
console.log(cheapestProduct);


// ---------------------------------------
// 7. Average Product Price
// ---------------------------------------

const totalPrice = products.reduce((total, product) => {

    return total + product.price;

}, 0);

const averagePrice = totalPrice / products.length;

console.log("\nAverage Product Price:", averagePrice);


// ---------------------------------------
// 8. Products With Rating >= 4.5
// ---------------------------------------

const topRatedProducts = products.filter((product) => {

    return product.rating >= 4.5;

});

console.log("\n========== TOP RATED PRODUCTS ==========");
console.log(topRatedProducts);


// ---------------------------------------
// 9. Products With Low Stock
// ---------------------------------------

const lowStockProducts = products.filter((product) => {

    return product.stock < 20;

});

console.log("\n========== LOW STOCK PRODUCTS ==========");
console.log(lowStockProducts);


// ---------------------------------------
// 10. Sort Products By Price
// ---------------------------------------

const sortedByPrice = [...products].sort((a, b) => {

    return a.price - b.price;

});

console.log("\n========== PRICE LOW TO HIGH ==========");
console.log(sortedByPrice);


// ---------------------------------------
// 11. Sort Products By Rating
// ---------------------------------------

const sortedByRating = [...products].sort((a, b) => {

    return b.rating - a.rating;

});

console.log("\n========== RATING HIGH TO LOW ==========");
console.log(sortedByRating);


// ---------------------------------------
// 12. Get Product Names
// ---------------------------------------

const productNames = products.map((product) => {

    return product.name;

});

console.log("\nProduct Names:");
console.log(productNames);


// ---------------------------------------
// 13. Apply 10% Discount
// ---------------------------------------

const discountedProducts = products.map((product) => {

    return {

        ...product,

        discountedPrice:
            product.price - product.price * 0.10

    };

});

console.log("\n========== DISCOUNTED PRODUCTS ==========");
console.log(discountedProducts);


// ---------------------------------------
// 14. Search Product
// ---------------------------------------

function searchProduct(keyword) {

    const result = products.filter((product) => {

        return product.name
            .toLowerCase()
            .includes(keyword.toLowerCase());

    });

    console.log("\n========== SEARCH RESULT ==========");
    console.log(result);

}

searchProduct("phone");


// ---------------------------------------
// 15. Add New Product
// ---------------------------------------

function addProduct(newProduct) {

    products.push(newProduct);

    console.log("\nProduct Added Successfully");

}

addProduct({

    id: 7,
    name: "Tablet",
    category: "Electronics",
    brand: "Lenovo",
    price: 28000,
    stock: 18,
    rating: 4.2,
    sold: 90

});


// ---------------------------------------
// 16. Update Product Price
// ---------------------------------------

function updatePrice(id, newPrice) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("Product not found");
        return;

    }

    product.price = newPrice;

    console.log("Price updated successfully");

}

updatePrice(2, 32000);


// ---------------------------------------
// 17. Update Stock
// ---------------------------------------

function updateStock(id, quantity) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("Product not found");
        return;

    }

    product.stock += quantity;

    console.log("Stock updated successfully");

}

updateStock(4, 10);


// ---------------------------------------
// 18. Delete Product
// ---------------------------------------

function deleteProduct(id) {

    const index = products.findIndex((product) => {

        return product.id === id;

    });

    if (index === -1) {

        console.log("Product not found");
        return;

    }

    products.splice(index, 1);

    console.log("Product deleted successfully");

}

deleteProduct(7);


// ---------------------------------------
// 19. Check Product Availability
// ---------------------------------------

function checkAvailability(id) {

    const product = products.find((product) => {

        return product.id === id;

    });

    if (!product) {

        console.log("Product not found");
        return;

    }

    if (product.stock > 0) {

        console.log(`${product.name} is available`);

    } else {

        console.log(`${product.name} is out of stock`);

    }

}

checkAvailability(1);


// ---------------------------------------
// 20. Most Sold Product
// ---------------------------------------

const mostSoldProduct = products.reduce((highest, product) => {

    return product.sold > highest.sold
        ? product
        : highest;

});

console.log("\n========== MOST SOLD PRODUCT ==========");
console.log(mostSoldProduct);


// ---------------------------------------
// 21. Total Products Sold
// ---------------------------------------

const totalSold = products.reduce((total, product) => {

    return total + product.sold;

}, 0);

console.log("\nTotal Products Sold:", totalSold);


// ---------------------------------------
// 22. Check Any Product Above ₹50000
// ---------------------------------------

const expensiveCheck = products.some((product) => {

    return product.price > 50000;

});

console.log(
    "\nAny product above ₹50000:",
    expensiveCheck
);


// ---------------------------------------
// 23. Check All Products Have Stock
// ---------------------------------------

const stockCheck = products.every((product) => {

    return product.stock > 0;

});

console.log(
    "All products available:",
    stockCheck
);


// ---------------------------------------
// 24. Category Wise Count
// ---------------------------------------

const categoryCount = products.reduce((result, product) => {

    if (!result[product.category]) {

        result[product.category] = 0;

    }

    result[product.category]++;

    return result;

}, {});

console.log("\n========== CATEGORY COUNT ==========");
console.log(categoryCount);


// ---------------------------------------
// 25. Total Inventory Value
// ---------------------------------------

const inventoryValue = products.reduce((total, product) => {

    return total + (product.price * product.stock);

}, 0);

console.log("\nTotal Inventory Value:", inventoryValue);


// ---------------------------------------
// 26. Final Product Count
// ---------------------------------------

console.log("\nTotal Products:", products.length);


// ---------------------------------------
// 27. Final Data
// ---------------------------------------

console.log("\n========== FINAL PRODUCT DATA ==========");
console.log(products);