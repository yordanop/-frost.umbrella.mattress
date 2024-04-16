let buttonAdd = document.querySelector('#test');
let buttonBack = document.querySelector('#back');

function createTemplatePost(){
    const postDiv = document.createElement('div');
    
    postDiv.classList.add('blog-post');
    postDiv.classList.add('light');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('t-c');

    const tittleP = document.createElement('p');
    tittleP.classList.add('title');
    tittleP.classList.add('light');

    const contentP = document.createElement('p');
    contentP.classList.add('content');
    contentP.classList.add('light');
    
    tittleP.textContent = 'Test title';
    contentP.textContent = 'Test content';

    contentDiv.appendChild(tittleP);
    contentDiv.appendChild(contentP);

    postDiv.appendChild(contentDiv);

    const userP = document.createElement('p');
    userP.classList.add('user');
    userP.classList.add('light');

    userP.textContent = 'Test user';

    postDiv.appendChild(userP)

    let postsSection = document.querySelector('#content');
    postsSection.appendChild(postDiv)

}

function changePage(event){
    event.preventDefault()
    location.href = "index.html";
}

buttonBack.addEventListener('click', changePage);

buttonAdd.addEventListener('click', createTemplatePost);