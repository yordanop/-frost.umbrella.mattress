let buttonAdd = document.querySelector('#test');

function addNewPost(){
    const postDiv = document.createElement('div');
    
    postDiv.classList.add('blog-post');
    postDiv.classList.add('light');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('t-c');

    const tittleP = document.createElement('p');
    const contentP = document.createElement('p');
    
    tittleP.textContent = 'Test 1'
    contentP.textContent = 'Test 1'

    postDiv.append()

    let postsSection = document.querySelector('#content');
    // console.log(postsSection)
    postsSection.appendChild(postDiv)


}

buttonAdd.addEventListener('click', addNewPost);