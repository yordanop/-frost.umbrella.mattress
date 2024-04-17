const buttonSubmit = document.querySelector('#user-submit');
const userNameInput = document.querySelector('#usernameInput');
const titleInput = document.querySelector('#titleInput');
const contentInput = document.querySelector('#contentInput');

let allPosts = {
    posts : [], 
    actMode:[]
};

function retrieveHistoric(){
    const storedData = JSON.parse(localStorage.getItem('postsHistoric'))
    if(storedData){
        allPosts = storedData;
    }
}

function retrieveNewPost(event){
    event.preventDefault()
    const userRetrievedData = userNameInput.value;
    const titleRetrievedData = titleInput.value;
    const contentRetrievedData = contentInput.value;
    if(userRetrievedData && titleRetrievedData && contentRetrievedData){
        allPosts.posts.push({
            userData : userRetrievedData,
            titleData : titleRetrievedData,
            contentData : contentRetrievedData
        })
        updateLocalStorage();
        changePage();
    }else{
        alert('Please fill all the fields.');
    }
}

function updateLocalStorage() {
    localStorage.setItem('postsHistoric', JSON.stringify(allPosts))
}

function changePage(){
    location.href = "blog.html";
}

function init(){
    retrieveHistoric()
    buttonSubmit.addEventListener('click', retrieveNewPost);

}

init();