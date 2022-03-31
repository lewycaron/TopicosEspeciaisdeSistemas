function getRandom() {
    let para = document.createElement('p');
    para.textContent = Math.random() * 10;
    document.body.appendChild(para);
}

function debito(){
    location.href = "debito.html";
    //window.open("debito.html", "_blank");
}

function sonar(){
    location.href = "sonar.html";
}

function jenkins(){
    location.href = "jenkins.html";
}
