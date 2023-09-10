const zonas = ["caba", "oeste", "norte", "sur"];

console.log(zonas);

function calcularEnvio() {
    let remitente = prompt(
        "Indique su zona de residencia (caba, oeste, norte o sur)"
    ).toLowerCase();

    if (remitente == zonas[0]) {
        alert("el costo del envio es de 1000");
    } else if (remitente == zonas[1]) {
        alert("el costo del envio es de 1500");
    } else if (remitente == zonas[1]) {
        alert("el costo del envio es de 1800");
    } else if (remitente == zonas[2]) {
        alert("el costo del envio es de 1300");
    } else if (remitente == zonas[3]) {
        alert("el costo del envio es de 2500");
    } else {
        alert("ingrese un dato valido, escoga entre caba, norte, oeste y sur");
        calcularEnvio();
    }
}

calcularEnvio();
