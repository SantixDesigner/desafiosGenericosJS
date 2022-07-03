const Intel = () =>{
    for (const nameProducts of productsIntel){
        alert("Here are the products of Intel: "+nameProducts.nameS);
    }
    const productProcessor = productsIntel.map (elementProcessors => elementProcessors.nameS); //Recorre el array de productos AMD o Intel
    const priceProcessor = productsIntel.map (elementProcessors => elementProcessors.price);
    runDo(productProcessor,priceProcessor); //llamado a la función runDo() de Intel
}
const AMD = () =>{ //Esto genera la lista correspondiente a si es AMD o es Intel
    for (const nameProducts of productsAMD){
        alert("Here are the products of AMD: "+nameProducts.nameS);
    }
    const productProcessor = productsAMD.map (elementProcessors => elementProcessors.nameS); //Recorre el array de productos AMD o Intel
    const priceProcessor = productsAMD.map (elementProcessors => elementProcessors.price);
    runDo(productProcessor,priceProcessor); //llamado a la función runDo() AMD
}
const iva=(nameS,price)=>{
    let iva = 0.21;
    let resultIva = (price*iva)+price;
    alert("The name of the product is: "+nameS+" and the price of this with IVA is: u$d"+Math.round(resultIva));
}
const runDo = (productProcessor, priceProcessor) =>{ //Esto genera la lista correspondiente a si es AMD o es Intel
    do{
        nameProduct = prompt("What do you want to buy? ESC FOR EXIT");
        if (productProcessor.indexOf(nameProduct) != -1){
            alert("Ok, you are buying: "+productProcessor[productProcessor.indexOf(nameProduct)]);
            priceProduct2 += parseInt(priceProcessor.splice(productProcessor.indexOf(nameProduct),1));
            productsS += productProcessor.splice(productProcessor.indexOf(nameProduct),1) + ", ";
            if (productProcessor.length < 1){
                alert("STOP");
                break;
            }
        }
    }while (nameProduct != "ESC");
    alert("It still: "+productProcessor.join(" "));
    alert("You buy: "+productsS);
    alert("You need to pay: u$d"+priceProduct2);
    iva (productsS, priceProduct2);
}
const productsAMD = [
    {nameS: "Ryzen 3 1200", price: 1100, stock:10},
    {nameS: "Ryzen 3 2200g", price: 1350, stock:10},
    {nameS: "Ryzen 5 2400g", price: 1800, stock:10},
    {nameS: "Ryzen 5 3600", price: 2500, stock:10},
    {nameS: "Ryzen 7 3700x", price: 6500, stock:10},
    {nameS: "Ryzen 5 5600x", price: 8000, stock:10},
    {nameS: "Ryzen 9 3900x", price: 9000, stock:10},
    {nameS: "Ryzen 9 3990xt", price: 13370, stock:10}
]; //Estos son los productos AMD
const products = [
    {nameS:"INTEL", stock: true},
    {nameS:"AMD", stock: true},
    {nameS:"NVIDIA", stock: false}
]; //Estos son las marcas
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
]; //Estos son los productos Intel

//Definición de variables globales
let nameProduct = "";
let productsS = "";
let priceProduct2 = 0;
//Inicio
alert("Welcome to TecnoStore");
alert("Here you can watch the best prices for components of PC in the market");
nameProduct = prompt("First, what are you searching? AMD/Intel/Nvidia").toUpperCase();
const namesHighBusiness = products.map((elementProcessors) => elementProcessors.nameS);
const checkStock = products.map(elementProcessors => elementProcessors.stock); //Esto recorre el nombre de marcas de los products
while(namesHighBusiness.indexOf(nameProduct) == -1){ /* Esto sirve para identificar si está o no en el arreglo */
    nameProduct = prompt("Again, what are you searching?").toUpperCase();
}
if (namesHighBusiness.indexOf(nameProduct)!=-1){
    if (checkStock[namesHighBusiness.indexOf(nameProduct)] == true){
        alert("Oh, great! We have components of this type");
        if (namesHighBusiness[namesHighBusiness.indexOf(nameProduct)] == "AMD" ){
            AMD(); //Llamado a la función AMD
        }
        if (namesHighBusiness[namesHighBusiness.indexOf(nameProduct)] == "INTEL" ){ 
            Intel(); //Llamado a la función Intel
        }
    }
    else{
        alert("Sorry, we don't have components of this type. Comeback later :(");
    } //Si es NVIDIA, se cancela
}
const x = new Date();
alert("Thank you for visit TecnoStore in the day: "+x.getDate()+"/"+(x.getMonth()+1)+"/"+x.getFullYear());