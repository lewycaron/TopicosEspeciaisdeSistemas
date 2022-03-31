function getRandom() {
    let para = document.createElement('p');
    para.textContent = Math.random() * 10;
    document.body.appendChild(para);
}


    var btndeb = document.getElementById('btndebito');
    var container_debito = document.querySelector('.container_debito');
    btndeb.addEventListener('click',function() {
        if(container_debito.style.display === 'block')  {
            container_debito.style.display = 'none';
        }else{
            container_debito.style.display = 'block';
        }
    });


    var btnson = document.getElementById('btnsonar');
    var container_sonar = document.querySelector('.container_sonar');
    btnson.addEventListener('click',function() {
        if(container_sonar.style.display === 'block')  {
            container_sonar.style.display = 'none';
        }else{
            container_sonar.style.display = 'block';
        }
    });

    var btnjenk = document.getElementById('btnjenkins');
    var container_jenkins = document.querySelector('.container_jenkins');
    btnjenk.addEventListener('click',function() {
        if(container_jenkins.style.display === 'block')  {
            container_jenkins.style.display = 'none';
        }else{
            container_jenkins.style.display = 'block';
        }
    });


