function showTable(selector){
    document.querySelector(selector).classList.toggle('display');
}

function openTab(selector){ 
    document.querySelector(".active-tab").classList.toggle('active-tab');   
    document.querySelector(selector).classList.toggle('active-tab');
}

function saveInfo(){
    document.querySelector('#btn-1').style.display = 'none';
    document.querySelector('#small-view').classList.remove('small');
    var elements = document.querySelectorAll('.display');
    elements.forEach(el => {
        el.style = 'display: flex !important;'
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