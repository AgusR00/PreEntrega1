let numero = parseInt(prompt('Elije un número para saber su tabla de multiplicación'));

let numeroAElegir = parseInt(prompt('Hasta qué número lo multiplico? recomendable elegir hasta el 5, 10, 15 o 20'));

if (!isNaN(numero) && (!isNaN(numeroAElegir))) {

    for(i = 1; i <= numeroAElegir; i++) {
        
        let resultado = numero * i 

        alert (numero + ' x ' + i + " = " + resultado )
    }

} else {
    alert('Por favor, Ingrese un número válido')
}