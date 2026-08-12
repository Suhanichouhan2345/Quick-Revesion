// ==========================================
// E-COMMERCE SHOPPING MANAGEMENT SYSTEM
// JavaScript Practice Project
// ==========================================

class Product {
    constructor(id, name, category, price, stock, rating) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        this.rating = rating;
    }

    display() {
        console.log(
            `${this.id}. ${this.name} | ${this.category} | ₹${this.price} | Stock: ${this.stock} | ⭐${this.rating}`
        );
    }
}


// ==========================================
// SHOPPING CART
// ==========================================

class Cart {

    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {

        if (quantity <= 0) {
            console.log("Invalid quantity!");
            return;
        }

        if (quantity > product.stock) {
            console.log(
                `Only ${product.stock} units available!`
            );
            return;
        }

        const existingItem = this.items.find(
            item => item.product.id === product.id
        );

        if (existingItem) {

            if (
                existingItem.quantity + quantity >
                product.stock
            ) {
                console.log("Not enough stock!");
                return;
            }

            existingItem.quantity += quantity;

        } else {

            this.items.push({
                product: product,
                quantity: quantity
            });
        }

        console.log(
            `${quantity} x ${product.name} added to cart`
        );
    }


    removeProduct(productId) {

        const index = this.items.findIndex(
            item => item.product.id === productId
        );

        if (index === -1) {
            console.log("Product not found in cart!");
            return;
        }

        const removed = this.items.splice(index, 1);

        console.log(
            `${removed[0].product.name} removed from cart`
        );
    }


    updateQuantity(productId, quantity) {

        const item = this.items.find(
            item => item.product.id === productId
        );

        if (!item) {
            console.log("Product not found!");
            return;
        }

        if (quantity <= 0) {
            console.log("Invalid quantity!");
            return;
        }

        if (quantity > item.product.stock) {
            console.log("Not enough stock!");
            return;
        }

        item.quantity = quantity;

        console.log("Quantity updated successfully!");
    }


    calculateSubtotal() {

        return this.items.reduce(
            (total, item) =>
                total +
                item.product.price * item.quantity,
            0
        );
    }


    calculateDiscount() {

        const subtotal = this.calculateSubtotal();

        if (subtotal >= 10000) {
            return subtotal * 0.20;
        }

        if (subtotal >= 5000) {
            return subtotal * 0.10;
        }

        if (subtotal >= 2000) {
            return subtotal * 0.05;
        }

        return 0;
    }


    calculateShipping() {

        const subtotal = this.calculateSubtotal();

        if (subtotal === 0) {
            return 0;
        }

        if (subtotal >= 5000) {
            return 0;
        }

        return 100;
    }


    calculateTotal() {

        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount();
        const shipping = this.calculateShipping();

        return subtotal - discount + shipping;
    }


    displayCart() {

        console.log("\n================================");
        console.log("SHOPPING CART");
        console.log("================================");

        if (this.items.length === 0) {
            console.log("Cart is empty!");
            return;
        }

        this.items.forEach((item, index) => {

            const total =
                item.product.price * item.quantity;

            console.log(
                `${index + 1}. ${item.product.name}`
            );

            console.log(
                `   Quantity : ${item.quantity}`
            );

            console.log(
                `   Price    : ₹${item.product.price}`
            );

            console.log(
                `   Total    : ₹${total}`
            );
        });

        console.log("--------------------------------");
        console.log(
            `Subtotal : ₹${this.calculateSubtotal()}`
        );

        console.log(
            `Discount : ₹${this.calculateDiscount()}`
        );

        console.log(
            `Shipping : ₹${this.calculateShipping()}`
        );

        console.log(
            `Final    : ₹${this.calculateTotal()}`
        );
    }


    clearCart() {
        this.items = [];
        console.log("Cart cleared!");
    }
}


// ==========================================
// STORE
// ==========================================

class Store {

    constructor(name) {
        this.name = name;
        this.products = [];
    }


    addProduct(product) {

        const exists = this.products.some(
            item => item.id === product.id
        );

        if (exists) {
            console.log("Product already exists!");
            return;
        }

        this.products.push(product);

        console.log(
            `${product.name} added to store`
        );
    }


    removeProduct(productId) {

        const index = this.products.findIndex(
            product => product.id === productId
        );

        if (index === -1) {
            console.log("Product not found!");
            return;
        }

        const deleted = this.products.splice(index, 1);

        console.log(
            `${deleted[0].name} removed from store`
        );
    }


    findProduct(productId) {

        return this.products.find(
            product => product.id === productId
        );
    }


    searchProduct(keyword) {

        return this.products.filter(product =>
            product.name
                .toLowerCase()
                .includes(keyword.toLowerCase())
        );
    }


    filterByCategory(category) {

        return this.products.filter(product =>
            product.category.toLowerCase() ===
            category.toLowerCase()
        );
    }


    filterByPrice(maxPrice) {

        return this.products.filter(
            product => product.price <= maxPrice
        );
    }


    getTopRated() {

        return [...this.products]
            .sort((a, b) => b.rating - a.rating);
    }


    getCheapestProducts() {

        return [...this.products]
            .sort((a, b) => a.price - b.price);
    }


    getMostExpensiveProducts() {

        return [...this.products]
            .sort((a, b) => b.price - a.price);
    }


    getTotalStockValue() {

        return this.products.reduce(
            (total, product) =>
                total +
                product.price * product.stock,
            0
        );
    }


    displayProducts(data = this.products) {

        console.log("\n================================");
        console.log(this.name);
        console.log("================================");

        data.forEach(product => {
            product.display();
        });
    }
}


// ==========================================
// CREATE STORE
// ==========================================

const store = new Store(
    "JavaScript Online Store"
);


// ==========================================
// ADD PRODUCTS
// ==========================================

store.addProduct(
    new Product(
        1,
        "Laptop",
        "Electronics",
        55000,
        10,
        4.7
    )
);

store.addProduct(
    new Product(
        2,
        "Smartphone",
        "Electronics",
        25000,
        20,
        4.5
    )
);

store.addProduct(
    new Product(
        3,
        "Headphones",
        "Electronics",
        2500,
        30,
        4.3
    )
);

store.addProduct(
    new Product(
        4,
        "Keyboard",
        "Accessories",
        1800,
        25,
        4.4
    )
);

store.addProduct(
    new Product(
        5,
        "Mouse",
        "Accessories",
        900,
        40,
        4.2
    )
);

store.addProduct(
    new Product(
        6,
        "Backpack",
        "Fashion",
        1500,
        15,
        4.1
    )
);

store.addProduct(
    new Product(
        7,
        "Running Shoes",
        "Fashion",
        3500,
        12,
        4.6
    )
);

store.addProduct(
    new Product(
        8,
        "Watch",
        "Fashion",
        4500,
        8,
        4.8
    )
);


// ==========================================
// DISPLAY ALL PRODUCTS
// ==========================================

store.displayProducts();


// ==========================================
// SEARCH PRODUCT
// ==========================================

console.log("\n================================");
console.log("SEARCH RESULTS");
console.log("================================");

const searchResult =
    store.searchProduct("phone");

searchResult.forEach(product =>
    product.display()
);


// ==========================================
// CATEGORY FILTER
// ==========================================

console.log("\n================================");
console.log("ELECTRONICS");
console.log("================================");

const electronics =
    store.filterByCategory("Electronics");

electronics.forEach(product =>
    product.display()
);


// ==========================================
// PRICE FILTER
// ==========================================

console.log("\n================================");
console.log("PRODUCTS UNDER ₹3000");
console.log("================================");

store
    .filterByPrice(3000)
    .forEach(product => product.display());


// ==========================================
// TOP RATED
// ==========================================

console.log("\n================================");
console.log("TOP RATED PRODUCTS");
console.log("================================");

store
    .getTopRated()
    .slice(0, 5)
    .forEach(product => product.display());


// ==========================================
// CHEAPEST PRODUCTS
// ==========================================

console.log("\n================================");
console.log("CHEAPEST PRODUCTS");
console.log("================================");

store
    .getCheapestProducts()
    .slice(0, 5)
    .forEach(product => product.display());


// ==========================================
// MOST EXPENSIVE
// ==========================================

console.log("\n================================");
console.log("MOST EXPENSIVE PRODUCTS");
console.log("================================");

store
    .getMostExpensiveProducts()
    .slice(0, 5)
    .forEach(product => product.display());


// ==========================================
// TOTAL STOCK VALUE
// ==========================================

console.log("\n================================");
console.log("TOTAL STOCK VALUE");
console.log("================================");

console.log(
    `₹${store.getTotalStockValue()}`
);


// ==========================================
// CREATE CART
// ==========================================

const cart = new Cart();


// ==========================================
// ADD PRODUCTS TO CART
// ==========================================

console.log("\n================================");
console.log("ADDING PRODUCTS TO CART");
console.log("================================");

cart.addProduct(
    store.findProduct(2),
    1
);

cart.addProduct(
    store.findProduct(3),
    2
);

cart.addProduct(
    store.findProduct(7),
    1
);

cart.addProduct(
    store.findProduct(5),
    2
);


// ==========================================
// DISPLAY CART
// ==========================================

cart.displayCart();


// ==========================================
// UPDATE QUANTITY
// ==========================================

console.log("\n================================");
console.log("UPDATE QUANTITY");
console.log("================================");

cart.updateQuantity(3, 3);

cart.displayCart();


// ==========================================
// REMOVE PRODUCT
// ==========================================

console.log("\n================================");
console.log("REMOVE PRODUCT");
console.log("================================");

cart.removeProduct(5);

cart.displayCart();


// ==========================================
// FINAL BILL
// ==========================================

console.log("\n================================");
console.log("FINAL BILL");
console.log("================================");

console.log(
    `Subtotal : ₹${cart.calculateSubtotal()}`
);

console.log(
    `Discount : ₹${cart.calculateDiscount()}`
);

console.log(
    `Shipping : ₹${cart.calculateShipping()}`
);

console.log(
    `TOTAL    : ₹${cart.calculateTotal()}`
);


// ==========================================
// CHECKOUT
// ==========================================

console.log("\n================================");
console.log("CHECKOUT");
console.log("================================");

if (cart.items.length > 0) {

    cart.items.forEach(item => {

        item.product.stock -= item.quantity;
    });

    console.log(
        "Order placed successfully!"
    );

    console.log(
        `Amount Paid: ₹${cart.calculateTotal()}`
    );

} else {

    console.log("Cart is empty!");
}


// ==========================================
// UPDATED STOCK
// ==========================================

console.log("\n================================");
console.log("UPDATED INVENTORY");
console.log("================================");

store.displayProducts();


// ==========================================
// PROGRAM COMPLETE
// ==========================================

console.log("\n================================");
console.log("E-COMMERCE SYSTEM FINISHED");
console.log("================================");