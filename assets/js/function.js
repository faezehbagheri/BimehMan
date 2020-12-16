function showTable(selector){
    document.querySelector(selector).classList.toggle('display');
}

function openTab(selector){ 
    document.querySelector(".active-tab").classList.toggle('active-tab');   
    document.querySelector(selector).classList.toggle('active-tab');
}

function saveInfo(){
    document.querySelector('#btn-1').style.display = 'none';
    var elements = document.querySelectorAll('.bime__content .col-md-3');
    var elem = document.querySelectorAll('.display');
    
    elements.forEach(el => {
        el.classList.add('col-md-4');
        el.classList.remove('col-md-3');
    });

    elem.forEach(el => {
        el.classList.remove('display');
    });
}

function closeWithoutSave(){
    document.querySelector('#btn-1').style.display = 'inline';
    document.querySelector('#small-view').classList.add('small');
    var elements = document.querySelectorAll('.display');
    elements.forEach(el => {
        el.style = 'display: none !important;'
    });
}