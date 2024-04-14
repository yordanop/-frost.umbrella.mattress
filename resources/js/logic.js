function setToDarkMode(){

    const pTags = document.querySelectorAll('p');

    for(let pt_i of pTags){
        pt_i.setAttribute('style', 'font-size: 40px;');
    }
}