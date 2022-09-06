let nombre = prompt("ingrese su nombre")
let nota1, nota2, nota3;
nota1 = prompt('Ingrese 1ra. nota:');
nota2 = prompt('Ingrese 2da. nota:');
nota3 = prompt('Ingrese 3ra. nota:');

nota2 = parseFloat(nota2);
nota1 = parseFloat(nota1);
nota3 = parseFloat(nota3);
let pro;
pro = (nota1 + nota2 + nota3) / 3;
if (pro >= 7) {
    console.log(nombre, " aprobado");
} else {
    if (pro >= 4) {
        console.log(nombre, "regular");
    } else {
        console.log(nombre, " reprobado");
    }
}