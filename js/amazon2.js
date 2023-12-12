let calificacion1 = document.getElementById("calificacion1");
let calificacion2 = document.getElementById("calificacion2");
let calificacion3 = document.getElementById("calificacion3");
let calificacion4 = document.getElementById("calificacion4");
let calificacion5 = document.getElementById("calificacion5");
let btnGraficar = document.getElementById("btnGraficar");

btnGraficar.addEventListener("click", function(){
    let sumaCalificacion = (Number(calificacion1.value)+Number(calificacion2.value)+
                           Number(calificacion3.value) +Number(calificacion4.value)+ 
                           Number(calificacion5.value));
   let promedio1Estrella = (Number(calificacion1))
});
 
// teniendo en cuenta los valores individuales, hallar el promedio de cada calificacion

/*btnGraficar.addEventListener("click", function(){
    let calificacion1Value = Number(calificacion1.value) || 0;
    let calificacion2Value = Number(calificacion2.value) || 0;
    let calificacion3Value = Number(calificacion3.value) || 0;
    let calificacion4Value = Number(calificacion4.value) || 0;
    let calificacion5Value = Number(calificacion5.value) || 0;

    let sumaCalificaciones = calificacion1Value + calificacion2Value + calificacion3Value + calificacion4Value + calificacion5Value;
    let cantidadCalificaciones = 5;  // Puedes ajustar esto según la cantidad de calificaciones

    let promedioCalificaciones = sumaCalificaciones / cantidadCalificaciones;
    
    alert("Promedio de calificaciones: " + promedioCalificaciones.toFixed(2)); // toFixed(2) para mostrar solo dos decimales
}); */