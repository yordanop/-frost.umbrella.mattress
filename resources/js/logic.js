let buttonChng = document.querySelector('#mode-change');
let lightMode = true;


function setToDarkMode(){
    const pTags = document.querySelectorAll('.light');
    
    console.log(lightMode)

    if(lightMode){
        for(let pt_i of pTags){
            pt_i.setAttribute('style', 'color: var(--dark-text);');
            pt_i.classList.remove('light');
            pt_i.classList.add('dark')
        }
        
        lightMode = false
        // document.getElementById("MyElement").classList.remove('MyClass');
    }else{
        for(let pt_i of pTags){
            pt_i.setAttribute('style', 'color: var(--light-text);');
            pt_i.classList.remove('dark');
            pt_i.classList.add('light')
        }
        
        lightMode = true

    }
    console.log(lightMode)
}

buttonChng.addEventListener('click', setToDarkMode);

