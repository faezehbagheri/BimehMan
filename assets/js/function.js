function showTable(selector){
    document.querySelector(selector).classList.toggle('show-more');
}

function showAghsat(selector){
    document.querySelector(selector).classList.toggle('show-aghsat')
}

function openTab(selector){ 
    document.querySelector(".active-tab").classList.toggle('active-tab');   
    document.querySelector(selector).classList.toggle('active-tab');
}

function saveInfo(){
    document.querySelector('#btn-1').style.display = 'none';
    document.querySelector('.bime.result-page').classList.toggle('show-others')
    var elements = document.querySelectorAll('.content .col-md-3');
    // var elem = document.querySelectorAll('.animate-toTop');
    
    elements.forEach(el => {
        el.classList.add('col-md-4');
        el.classList.remove('col-md-3');
    });

    // elem.forEach(el => {
    //     el.style = 'transform: translateY(0%);'
    // });
}

function closeWithoutSave(){
    document.querySelector('#btn-1').style.display = 'inline';
    document.querySelector('.bime.result-page').classList.toggle('show-others')
    var elements = document.querySelectorAll('.content .col-md-4');
    var i=0;
    elements.forEach(el => {
        if(i >= 3){
            return
        }
        el.classList.add('col-md-3');
        el.classList.remove('col-md-4');
        i++;
    });

    var elements = document.querySelectorAll('.animate-toTop');
    elements.forEach(el => {
        
    });
}