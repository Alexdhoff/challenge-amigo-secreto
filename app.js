let amigos=[];
function agregarAmigo() {
    let nombreAmigo=document.getElementById("amigo").value;
    if(nombreAmigo.trim()==="") {
    alert("Por favor , inserte un nombre.");
    }
 else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value="";
    mostrarListaAmigo();
}
}
function mostrarListaAmigo() {
    let listaAmigos=document.querySelector("#listaAmigos");
    listaAmigos.innerHTML="";
    for(let index = 0; index < amigos.length; index++) {
        let element = amigos[index];
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
} 
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if(cantidadAmigos<=1) {
        alert("No hay amigos disponibles para sortear . El sorteo tiene un requerimiento minimo de dos amigos . ");
        }else {                          
    let indiceAmigo=Math.floor(Math.random()*cantidadAmigos);
    let resultadoHTML=document.querySelector("#resultado");
    resultadoHTML.innerHTML=amigos[indiceAmigo];
  }
}



