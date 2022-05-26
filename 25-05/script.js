console.log('alooooooo');



var header = document.querySelector('header');
var sectcion = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();

request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {

    var superheroes = request.response;
    populateHeader(superheroes);
    ShowHeroes(superheroes);

}


function populateHeader(jsonOBJ){
    console.log('alooooooo2');

    var myH1 = document.createElement('h1');
    myH1.textContent = jsonOBJ['squadName'];
    header.appendChild(myH1);

    var myCity = document.createElement('p');
    myCity.textContent = 'Cidade de Origen:' + jsonOBJ['homeTown'];
    header.appendChild(myCity);
}

function ShowHeroes(jsonOBJ){

    var heroes = jsonOBJ['members'];
    
    for (let i = 0; i < heroes.length; i++) {      
        var myarticle = document.createElement('article');
        var myh2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var mylist = document.createElement('ul');

        myh2.textContent = heroes[i].name;
        myPara1.textContent = 'Identidade Secreta: ' + heroes[i].secretIdentidy;
        myPara2.textContent = 'Idade' +heroes[i].age;
        myPara3.textContent = 'Super Poderes:';

        var superPowers = heroes[i].powers;

        for(var j = 0; j < superPowers.length; j++ ){
            var listIntens = document.createElement('li');
            listIntens.textContent = superPowers[j];
            mylist.appendChild(listIntens);
        }        

        myarticle.appendChild(myh2);
        myarticle.appendChild(myPara1);
        myarticle.appendChild(myPara2);
        myarticle.appendChild(myPara3);
        myarticle.appendChild(mylist);
        sectcion.appendChild(myarticle);

    }   
}

 

