let buttonChng = document.querySelector('#mode-change');



function setToDarkMode(){

    if(lightMode){
        const pTags = document.querySelectorAll('.light');
        for(let pt_i of pTags){
            // pt_i.setAttribute('style', 'color: var(--dark-text);');
            pt_i.classList.remove('light');
            pt_i.classList.add('dark')
        }
        
        lightMode = false
        
    }else{
        const pTags = document.querySelectorAll('.dark');
        for(let pt_i of pTags){
            // pt_i.setAttribute('style', 'color: var(--light-text);');
            pt_i.classList.remove('dark');
            pt_i.classList.add('light')
        }
        
        lightMode = true

    }

}

function sdfsdf(){
    let lightMode = true;
}
buttonChng.addEventListener('click', setToDarkMode);

