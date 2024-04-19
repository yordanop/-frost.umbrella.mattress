let buttonChng = document.querySelector('#mode-change');

// function to get form local storage what was the last mode that was set
function retrieveHistoric(){
    const storedData = JSON.parse(localStorage.getItem('postsHistoric'))
    if(storedData){
        allPosts = storedData;
    }else{
        allPosts = {
            posts : [], 
            actMode:[buttonChng.className]
        };
    }
}

// function that checks the mode set and if it needs to be changed
function checkMode(event){
    if (event){
        let actMode = allPosts.actMode;
        let btnActualClass = event.target.className;
        allPosts.actMode = btnActualClass;

        updateLocalStorage();
    
        if(actMode !== btnActualClass){
            changeMode();
        }
    }else {
        changeMode();
    }
}

// function that will safe any change of mode to the local storage
function updateLocalStorage() {
    localStorage.setItem('postsHistoric', JSON.stringify(allPosts))
}

// function that search all elements with the light or dark mode to change them
function changeMode(){
    let actMode = allPosts.actMode;
    let actButtonClass = document.querySelector('#mode-change').className;

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

// function that initiliza
function init(){
    retrieveHistoric();
    updateLocalStorage();
    checkMode();
    buttonChng.addEventListener('click', checkMode);

}

init();