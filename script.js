//#noQuiero,#elige,#jugador,#maquina,#ganas#pierdes
document.getElementById("no").onclick =function(){
document.getElementById("bienvenida").style.display='none';
document.getElementById("noQuiero").style.display='block';

}
document.getElementById("si").onclick =function(){
document.getElementById("bienvenida").style.display='none';
document.getElementById("elige").style.display='block';
}

document.getElementById("siguiente").onclick =function(){
document.getElementById("elige").style.display='none';
document.getElementById("jugador").style.display='block';
}

document.getElementById("continua").onclick =function(){
document.getElementById("jugador").style.display='none';
document.getElementById("maquina").style.display='block';
  juego();  
}
document.getElementById("juega").onclick =function pantalla(){
document.getElementById("maquina").style.display='none';
document.getElementById("ganas").style.display='block';
   
}
document.getElementById("juega").onclick =function pantalla(){
document.getElementById("maquina").style.display='none';
document.getElementById("pierdes").style.display='block';
   
}

function juego (){
var pares = document.getElementById("pares");
 var nones = document.getElementById("nones");   
   if(pares.checked){
   var jugador= document.getElementById("pares").value;
 var maquina =document.getElementById("nones").value;
    
   } 
     if(nones.checked){
   var jugador= document.getElementById("nones").value;
 var maquina =document.getElementById("pares").value;
    
   }  
console.log (jugador);
console.log(maquina);
   var jugada = document.getElementById("numero").value;
    var jugadaMaquina =Math.floor(Math.random()*11);
    console.log(jugada);
    console.log(jugadaMaquina);
    var suma =Number(jugada)+(jugadaMaquina);
    console.log(suma);
    
if(suma%2===0){
var resultado ="pares";
}
    if(suma%2 !==0){
    var resultado ="nones";
    
    }
    console.log(resultado);
    
if(resultado===jugador){
document.getElementById("resultados").style.display= "block";
    document.getElementById("pierdes").style.display= "none";
/*var texto =jugada+jugadaMaquina;
    document.getElementById("pantalla").innerHTML=texto;*/
    
}else {
document.getElementById("pierdes").style.display= "block";
    document.getElementById("resultados").style.display= "none";
}
}


