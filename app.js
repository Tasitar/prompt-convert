let history = [];
let numMenu;
let usd;
let resultado


function convertCurrency(pesos){
    return pesos/1300 
}


    numMenu= Number(prompt("1) Divisa (ARS -> USD) 2) salir"))

    switch (numMenu) {
        case 1: 
        pesos= Number(prompt("ingrese la cantidad de pesos a divisar"))
        resultado = convertCurrency(pesos)
        alert(resultado + "USD")
    }
    

