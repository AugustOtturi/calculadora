/* !USUARIO Y CONTRASEÑA */
const usuario = "admin";
const password = 1234;


loginUsser();




/* !INGRESO DE USUARIO*/
function loginUsser() {
    do {
        var usser = prompt("Ingresá un USUARIO");

        if (usser != usuario) {
            alert("Error, usuario INCORRECTO");

        }
    } while (usser != usuario);
    alert("Usuario correcto")

    do {
        var pass = prompt("Ingresá la CONTRASEÑA");

        if (pass != password) {
            alert("Error, contraseña incorrecta");

        }
    } while (pass != password);
    alert("Bienvenido " + usuario + ", Estamos listos para trabajar!")
}




/* !CALCULAR PRECIO DE VENTA DE UN PRODUCTO */
function valorVenta() {
    let num = prompt("Ingresa el valor del producto");
    let resultado = num * 1.9;
    alert("El valor de venta es: " + resultado.toFixed(2));
}



/* !CALCULAR IVA DE UN PRODUCTO */
function valorIva() {
    let valorProducto = prompt("Ingresa el valor del producto");
    let resultado = valorProducto * 0.21;
    alert("El IVA que abonaste por el producto es: " + resultado.toFixed(2));
}



/* !CALCULADORA DE COSTO OPERATIVO */

function costoOperativo() {
    let valores = [];
    let sum = 0;
    let veces = parseInt(prompt("Cuantos servicios vas a sumar?"));

    for (i = 1; i <= veces; i++) {
        valores[i] = parseInt(prompt("Ingresá el valor del servicio nro " + i));

    }
    
    for (let i = 1; i < valores.length; i++) {
        sum += valores[i];
    }

    let seleccion = parseInt(prompt("1) Costo operativo mensual, 2) Costo operativo diario, 3) Volver a comenzar"));

    switch (seleccion) {
        case 1:
            alert("El costo operativo mensual de tu comercio es de: " + sum);
            break;
        case 2:
            let dias = parseInt(prompt("¿Cuantos dias al mes mantenes tu local abierto?"))
            let resultado = sum / dias;
            alert("El costo operativo diario es de: " + resultado.toFixed(2))
            break;
        case 3:
            costoOperativo();
        default:
            alert("Igresaste una opcion invalida, volvé a intentarlo");
    }

}





































