const buttonSubmit = document.querySelector('#user-submit');
const userNameInput = document.querySelector('#usernameInput');
const titleInput = document.querySelector('#titleInput');
const contentInput = document.querySelector('#contentInput');

let allPosts = {posts : []};

function changePage(){
    
    retrieveNewPost();
    location.href = "blog.html";
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
    }else{
        alert('Please fill all the fields.');
    }
    console.log(allPosts);

}

buttonSubmit.addEventListener('click', retrieveNewPost);