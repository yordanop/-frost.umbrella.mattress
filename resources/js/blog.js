let buttonAdd = document.querySelector('#test');
let buttonBack = document.querySelector('#back');


// function that gets the info from the local storage and creates the templates to append with the content
function loadFromLocalStorage() {
    
const storedData = JSON.parse(localStorage.getItem('postsHistoric'));

if (storedData) {
    allPosts = storedData;

    allPosts.posts.forEach(postToPost => {
        // creating the empty template for the posts
        let postDivEmpty = createTemplatePost();
        // filling up the templates
        let postTitle = postDivEmpty.querySelector('.title') 
        let postUser = postDivEmpty.querySelector('.user') 
        let postContent = postDivEmpty.querySelector('.content') 
        postTitle.textContent = postToPost.titleData;
        postUser.textContent = postToPost.userData;
        postContent.textContent = postToPost.contentData;
    //    appending to the content section
        let postsSection = document.querySelector('#content');
        postsSection.appendChild(postDivEmpty);
    });
}
}

// function that creates the sctructure of one post section
function createTemplatePost(){
    // setting the structure and classes needed
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
    
    // placeholders that would be overwritten
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

    return postDiv

}

// function to go back
function changePage(event){
    event.preventDefault()
    location.href = "index.html";
}

// function that will initializa
function init(){

    buttonBack.addEventListener('click', changePage);

    loadFromLocalStorage()
}

init()