function showTable(selector){
    document.querySelector(selector).classList.toggle('display');
}

function openTab(selector){ 
    document.querySelector(".active-tab").classList.toggle('active-tab');   
    document.querySelector(selector).classList.toggle('active-tab');
}