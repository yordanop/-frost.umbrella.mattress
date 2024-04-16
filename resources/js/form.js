let buttonSubmit = document.querySelector('#user-submit');

function changePage(event){
    event.preventDefault()
    location.href = "blog.html";
}

buttonSubmit.addEventListener('click', changePage);