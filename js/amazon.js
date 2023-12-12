let calificacion5 = document.getElementById('calificacion5');
let calificacion4 = document.getElementById('calificacion4');
let calificacion3 = document.getElementById('calificacion3');
let calificacion2 = document.getElementById('calificacion2');
let calificacion1 = document.getElementById('calificacion1');

let bar5 = document.getElementById('porcentaje5');
let bar4 = document.getElementById('porcentaje4');
let bar3 = document.getElementById('porcentaje3');
let bar2 = document.getElementById('porcentaje2');
let bar1 = document.getElementById('porcentaje1');

let spanPor5 = document.getElementById('porcen5');
let spanPor4 = document.getElementById('porcen4');
let spanPor3 = document.getElementById('porcen3');
let spanPor2 = document.getElementById('porcen2');
let spanPor1 = document.getElementById('porcen1');

let btnGraficar = document.getElementById('btnGraficar');

btnGraficar.addEventListener('click', function(){

    let totalVotos = Number(calificacion1.value) + Number(calificacion2.value) + Number(calificacion3.value) + Number(calificacion4.value) + Number(calificacion5.value);

    let porcentaje5 = Math.floor((parseFloat(calificacion5.value)/totalVotos)*100);
    let porcentaje4 = Math.floor((parseFloat(calificacion4.value)/totalVotos)*100);
    let porcentaje3 = Math.floor((parseFloat(calificacion3.value)/totalVotos)*100);
    let porcentaje2 = Math.floor((parseFloat(calificacion2.value)/totalVotos)*100);
    let porcentaje1 = Math.floor((parseFloat(calificacion1.value)/totalVotos)*100);

    console.log(porcentaje5);
    console.log(porcentaje4);
    console.log(porcentaje3);
    console.log(porcentaje2);
    console.log(porcentaje1);

    bar5.style.width = porcentaje5+"%";
    bar4.style.width = porcentaje4+"%";
    bar3.style.width = porcentaje3+"%";
    bar2.style.width = porcentaje2+"%";
    bar1.style.width = porcentaje5+"%";

    spanPor5.innerHTML = porcentaje5+"%";
    spanPor4.innerHTML = porcentaje4+"%";
    spanPor3.innerHTML = porcentaje3+"%";
    spanPor2.innerHTML = porcentaje2+"%";
    spanPor1.innerHTML = porcentaje1+"%";

});