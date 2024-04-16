let buttonSubmit = document.querySelector('#user-submit');
let userNameInput = document.querySelector('#usernameInput');
let titleInput = document.querySelector('#titleInput');
let contentInput = document.querySelector('#contentInput');

const allPosts = []


function changePage(event){
    event.preventDefault()
    location.href = "blog.html";
}

buttonSubmit.addEventListener('click', changePage);