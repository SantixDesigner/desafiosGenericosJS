let product = "";
let price = 0;
let iva1 = 0;
let descuentoS = 0;
let iThink = "";
let ivaExterno = 0;
let cantProductos = 0;
let additionPrice = 0;
let limit = 15000;
const init = (product,price) =>{
    return "El nombre del producto es: "+product+"\n y el precio del mismo es: $"+price;
}

const numero = numero =>{
    return numero;
}

const iva = (iva1,price) => {
    iva1 = ((iva1/100)*parseInt(price))+parseInt(price);
    ivaExterno = iva1;
    return "El precio total con IVA es: "+iva1;
}
const descuento = (descuento,iva1) =>{
    descuento = iva1-((iva1)*(descuento/100));
    additionPrice += descuento;
    return "El precio final con el descuento es: "+descuento;
}
const postBucle = (cantProductos, additionPrice, limit) =>{
    alert("Se han registrado "+cantProductos+ " productos que ha comprado");
    alert("Ha gastado en total: "+additionPrice);
    if (additionPrice > limit){
        alert("Ha gastado más de lo que tiene, se procederá a una deuda y se cobrará el doble de lo que gastó: $"+(additionPrice*2));
    }
}
do{
    let contador = prompt("Digite cantidad de productos");
    for (let i = 0; i<numero(contador); i++){
        product = prompt("Digite el nombre del producto (o presione ESC para salir)").toUpperCase();
        if (product == "ESC"){
            break;
        }
        price = prompt("Digite el precio del producto").toUpperCase();
        if (price == "ESC"){
            break;
        }
        parseInt(price);
        console.log(init(product,price));
        iva1 = parseInt(prompt("Digite el iva"));
        console.log(iva(iva1,price));
        descuentoS = parseInt(prompt("Digite el porcentaje del descuento"));
        console.log(descuento(descuentoS, ivaExterno));
        cantProductos++;
    }
    if ((price != "ESC") && (product != "ESC")){
        iThink = prompt("Desea continuar? Si/No").toUpperCase();
    }else{
        break;
    }
}while((product != "ESC") && (price != null) &&(iThink == "SI"));
postBucle(cantProductos, additionPrice, limit);