let buttonChng = document.querySelector('#mode-change');
let lightMode = true;

function setToDarkMode(){
    const pTags = document.querySelectorAll('.light');
    console.log(pTags)
    for(let pt_i of pTags){
        pt_i.setAttribute('style', 'color: var(--dark-text);');
    }
}

buttonChng.addEventListener('click', setToDarkMode);

