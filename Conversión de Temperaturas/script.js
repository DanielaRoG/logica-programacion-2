
let celsius 

while (true) {
    celsius= parseFloat(prompt("Ingresa una temperatura en grados Celsius"));
    
    if (isNaN(celsius)){
        console.log("No es un numero")
        alert("No es un numero, Porfis ingresa un numero")
    } else {
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        console.log  ("La temperatura en Fahrenheit es " + fahrenheit + "°F")
        console.log  ("La temperatura en Kelvin es " + kelvin + "°K")
        break;}
}





