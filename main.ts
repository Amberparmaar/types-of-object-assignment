//types of objects
const laptops = ["laptop1", "laptop2", "laptop3"];
interface specificationType {
    processor: string;
    memory: number;
    storage: string;
}
type laptopType ={
    brand: string; 
    model: string; 
    screenSize: number; 
    price: number; 
    specification: specificationType;
    warranty : boolean;
} 
const laptop1 : laptopType = {
    brand: "hp",
    model: "Pavilion", 
    screenSize: 15.6,
    price: 27000, 
    warranty : true,
    specification: {
     processor: "intel i5",
    memory: 8,
    storage: "512GB SSD",
} 
} 
const laptop2 : laptopType = {
    brand: "Dell", 
    model: "Inspiron",
    screenSize: 13.3,
    price: 37000, 
    warranty : true,
    specification: {
        processor: "Intel i7",
        memory: 16,
        storage: "1tb SSD", 
    }
}
const laptop3 : laptopType = {
    brand: "Apple", 
    model: "MacBook Air",
    screenSize: 13.5,
    price: 45000,
    warranty :true,
    specification:{
        processor: "AppleMI",
        memory: 8,
        storage: "512GB SSD" 
    }
}
console.log(laptop1.specification.processor);
console.log("The End");
