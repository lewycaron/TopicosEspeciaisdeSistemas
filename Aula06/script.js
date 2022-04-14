function interacao(){

    var nome = document.getElementById('nome').value; 
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;

    var media = (parseInt(nota1) + parseInt(nota2)) / 2;

    var mediafinal = document.getElementById("textoP").innerHTML;
    mediafinal = mediafinal + media;
    document.getElementById("textoP").innerHTML = mediafinal;

}