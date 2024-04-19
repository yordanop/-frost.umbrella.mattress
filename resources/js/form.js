const buttonSubmit = document.querySelector('#user-submit');
const userNameInput = document.querySelector('#usernameInput');
const titleInput = document.querySelector('#titleInput');
const contentInput = document.querySelector('#contentInput');

let allPosts = {
    posts : [], 
    actMode:['']
};

// function to set the info from local storage to allPosts object
function retrieveHistoric(){
    const storedData = JSON.parse(localStorage.getItem('postsHistoric'))
    if(storedData){
        allPosts = storedData;
    }
}

// function to set the new posts info in allPosts object and save it in the local storage
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
        // when the new info is in the object nex step is to update the local storage and send to the posts page
        updateLocalStorage();
        changePage();
    }else{
        alert('Please fill all the fields.');
    }
}

// send the allposts info to the local storage
function updateLocalStorage() {
    localStorage.setItem('postsHistoric', JSON.stringify(allPosts))
}

// function to change to next page
function changePage(){
    location.href = "blog.html";
}

// function that initiliza
function init(){
    retrieveHistoric()
    buttonSubmit.addEventListener('click', retrieveNewPost);

}

init();