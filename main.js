//types of objects
var laptops = ["laptop1", "laptop2", "laptop3"];
var laptop1 = {
    brand: "hp",
    model: "Pavilion",
    screenSize: 15.6,
    price: 27000,
    warranty: true,
    specification: {
        processor: "intel i5",
        memory: 8,
        storage: "512GB SSD",
    }
};
var laptop2 = {
    brand: "Dell",
    model: "Inspiron",
    screenSize: 13.3,
    price: 37000,
    warranty: true,
    specification: {
        processor: "Intel i7",
        memory: 16,
        storage: "1tb SSD",
    }
};
var laptop3 = {
    brand: "Apple",
    model: "MacBook Air",
    screenSize: 13.5,
    price: 40000,
    warranty: true,
    specification: {
        processor: "AppleMI",
        memory: 8,
        storage: "512GB SSD"
    }
};
console.log(laptop1.specification.processor);
