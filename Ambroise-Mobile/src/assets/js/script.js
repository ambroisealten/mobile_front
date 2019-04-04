window.onload = charged;
window.onchange = charged;

function charged(){
    setTimeout(() => {
        let itemList = document.getElementsByClassName('list-item');
        for(let item of itemList){
            item.addEventListener('click',test,false);
        }
    },50);
}

function test(event){
    console.log("Bonjour");
    let parentNode = event.target.parentNode;
    while(parentNode.nodeName != "ONS-LIST-ITEM"){
        parentNode = parentNode.parentNode;
    }
    let id = parentNode.id.substr(4,1);
    document.getElementById('appTabbar').setActiveTab(id);
    document.getElementById('menu').close();
}