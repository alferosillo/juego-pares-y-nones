//#noQuiero,#elige,#jugador,#maquina,#ganas#pierdes
document.getElementById("no").onclick =function(){
document.getElementById("bienvenida").style.display='none';
document.getElementById("noQuiero").style.display='block';

}
document.getElementById("si").onclick =function(){
document.getElementById("bienvenida").style.display='none';
document.getElementById("elige").style.display='block';
}

document.getElementById("pares").onclick =function(){
document.getElementById("elige").style.display='none';
document.getElementById("jugador").style.display='block';
}
document.getElementById("nones").onclick =function(){
document.getElementById("elige").style.display='none';
document.getElementById("jugador").style.display='block';
}
document.getElementById("continua").onclick =function(){
document.getElementById("jugador").style.display='none';
document.getElementById("maquina").style.display='block';
}
document.getElementById("Juega").onclick =function(){
document.getElementById("maquina").style.display='none';
document.getElementById("ganas").style.display='block'; 
}
/*document.getElementById("Juega").onclick =function(){
document.getElementById("maquina").style.display='none';
document.getElementById("pierdes").style.display='block'; 
}*/
