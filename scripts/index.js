const iva=(nameS,price)=>{
    let iva = 0.21;
    let result = (price*iva)+price;
    console.log("The name of the product is: "+nameS+" and the price of this is: u$d"+price);
}

const productsAMD = [
    {nameS: "Ryzen 3 1200", price: 1100},
    {nameS: "Ryzen 3 2200g", price: 1350},
    {nameS: "Ryzen 5 2400g", price: 1800},
    {nameS: "Ryzen 5 3600", price: 2500},
    {nameS: "Ryzen 7 3700x", price: 6500},
    {nameS: "Ryzen 5 5600x", price: 8000},
    {nameS: "Ryzen 9 3900x", price: 9000},
    {nameS: "Ryzen 9 3990xt", price: 13370}
];
const products = [
    {nameS:"INTEL", stock: true},
    {nameS:"AMD", stock: true},
    {nameS:"NVIDIA", stock: false}
];
const productsIntel = [
    {nameS: "i3 9100F", price: 2000},
    {nameS: "i5 9400F", price: 2500},
    {nameS: "i7 7700K", price: 3000},
    {nameS: "i9 9900KF", price: 5000},
    {nameS: "i5 10600K", price: 7635},
    {nameS: "i5 12400F", price: 9000},
    {nameS: "i7 12700KF", price: 10000},
    {nameS: "i9 12900F", price: 18000},
    {nameS: "i9 12900K", price: 30000}
];
class Product{
    constructor(names, price){
        this.names = names;
        this.price = price;
        this.sold = false;
    }
    sold(){
        this.sold = true;
    }
};
let amdProducts;
let nameProduct;
let priceProduct;
alert("Welcome to TecnoStore");
alert("Here you can watch the best prices for components of PC in the market");
nameProduct = prompt("First, what are you searching? AMD/Intel/Nvidia").toUpperCase();
const array = products.map((elementProcessors) => elementProcessors.nameS);
const array2 = products.map(elementProcessors => elementProcessors.stock);
console.log(array);
while(array.indexOf(nameProduct) == -1){
    nameProduct = prompt("Again, what are you searching?").toUpperCase();
}
if (array.indexOf(nameProduct)!=-1){
    if (array2[array.indexOf(nameProduct)] == true){
        alert("Oh, great! We have components of this type");
        if (array2[array.indexOf(nameProduct)] == 1 ){
            for (const nameProducts of productsAMD){
                alert("Here are the products of AMD: "+nameProducts.nameS);
                console.log(nameProducts.nameS);
            }
            nameProduct = prompt("What do you want to buy?");
            const array3 = productsAMD.map (elementProcessors => elementProcessors.nameS);
            console.log(array3.indexOf(nameProduct));
            if (array3.indexOf(nameProduct) != -1){
                alert("Ok, you are buying: "+array3[array3.indexOf(nameProduct)]);
                console.log(array3);
                array3.splice(array3.indexOf(nameProduct),1);
                console.log(array3);
            }
        }
    }
    else{
        alert("Sorry, we haven't components of this type. Comeback later :(");
    }
}
