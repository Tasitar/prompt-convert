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

        let recivo = {
            divisa:"ARS -> USD",
            ingresado: pesos + "pesos",
            dolares: resultado.toFixed(2),
            fecha: new Date().toLocaleDateString()
        }
        history.push(recivo)

        case 2:
            break

        default:
            alert("opcion invalida")
    }
    |
    console.log (history)

