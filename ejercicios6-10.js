/*................EJERCICIO 6 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver
	3. Leer 1 numero METROST
	4. Hacer la conversion de metros a pulgadas
	5. Escribir el resultado PULGADAT
	6. Fin
*/

alert ("Metros de tela para pedir en pulgadas")
var metrost = prompt ("Cuantos metros de tela requieres para hacer tu pedido?");
var pulg = 0.0254
var pulgadat = (parseFloat(metrost) / pulg) //Conversion de metros a pulgadas
alert("Las pulgadas que necesitas para hacer tu pedido es de= " + pulgadat)


/*................EJERCICIO 7 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver
	3. Leer 1 numero METROSP
	4. Escribir Considerar que el precio es de 40 pesos por m2
	5. Realizar la operacion de COSTO por METROSP
	6. Escribir el resultado de COSTO.
	8. Fin
*/

alert ("Generar un presupuesto de pintura de acuerdo a los m2 solicitados")
var metrosp = prompt ("Cuantos metros deseas pintar")
alert ("Considerando que el precio del m2 esta en $40 pesos")
var costo = (parseFloat(metrosp)* 40)
alert ("El presupuesto para la cantidad de metros ingresada es de $" + costo + " pesos")


/*................EJERCICIO 8 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver.
	3. Leer KM
	5. Inicializar la variable de PRKM.
	6. Realizar la operacion de KM por PRKM
	6. Escribir el resultado de PRECIO.
	7.Fin
*/

alert ("Costo de boleto de acuerdo a los kms por recorrer")
var km = prompt ("Cual es la distancia en kilometros del trayecto que realizaras?")
var prkm = 2.45		//precio por km supuesto
var precio = (parseFloat(km) * prkm)
alert ("El costo del boleto para tu trayecto es de $" + precio + " pesos")


/*................EJERCICIO 9 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver
	3. Leer LlAMADA
	4. Inicializar PRLLAMADA
	5. Realizar la operacion de LLAMADA POR PRLLAMADA
	7. Escribir el resultado de COSTOFINAL.
	8. Fin
*/

alert ("Costo de llamada telefonica por minuto")
var llamada = prompt ("Ingresa el tiempo de la llamada en minutos")
var prllamada = 2.5		//precio por minuto supuesto
var costofinal = (parseFloat(llamada) * prllamada)
alert ("El costo de tu llamada es de $" + costofinal + " pesos")


/*................EJERCICIO 10 ......................*/
/*	1. Inicio.
	2. Escribir el problema a resolver
	3. Inicializar la varable de PRECIOH 450
	3. Leer D.
	4. Si d===1 
		4a. Realizar la operacion de PRECIOH por D
		4b. Escribir DIA
	5. De contrario, Si d>1
		5a. Realizar un AJUSTE de D menos 1 (porque es precio por noche)
		5b. Realizar la operacion de AJUSTE por PRECIOH en FINAL
		5c. Escribir FINAL
	6. De lo contrario
		6a. Escribir: El numero ingresado es incorrecto

*/
alert ("Costo por noche de una habitacion")
var precioh = 450
var d = prompt ("Ingresa los dias de hospedaje")

if (d == 1) {
	var dia = (parseInt(precioh * d))
	alert("El precio por 1 dia es de $" + dia + " pesos")
}
else if (d > 1) {
  	var ajuste = (parseInt(d - 1))
	var final = (parseInt(ajuste * precioh))
	alert("El precio por "+ ajuste + " noches a hospedarte es de $" + final + " pesos")
}
else{
	alert("El numero ingresado es incorrecto")
}
alert("Si tienes alguna duda informate con Tayde :D")

