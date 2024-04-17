let buttonChng = document.querySelector('#mode-change');

function retrieveHistoric(){
    const storedData = JSON.parse(localStorage.getItem('postsHistoric'))
    if(storedData){
        allPosts = storedData;
    }
}

function checkMode(event){
    let actMode = allPosts.actMode;
    allPosts.actMode = event.target.className;
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('postsHistoric', JSON.stringify(allPosts))
}

function checkMode_(event){
    let actMode = allPosts.actMode;
    let actButtonClass = document.querySelector('#mode-change').className;
    console.log(actButtonClass);
    console.log(actMode)
    if(event){
        actMode = event.target.className;
        console.log(actMode)
    }
    
    if((actMode === 'light') && (actMode === actButtonClass)){
        const pTags = document.querySelectorAll('.light');
        for(let pt_i of pTags){
            pt_i.classList.remove('light');
            pt_i.classList.add('dark')
        }
        
        actMode = 'dark'
        
    }else{
        const pTags = document.querySelectorAll('.dark');
        for(let pt_i of pTags){
            pt_i.classList.remove('dark');
            pt_i.classList.add('light')
        }
        
        actMode = 'light'
    }

}

function init(){
    retrieveHistoric()
    buttonChng.addEventListener('click', checkMode);

}

init();