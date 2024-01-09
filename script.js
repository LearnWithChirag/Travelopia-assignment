// let status = "less";

// function toggl(){
//     document.querySelectorAll('.active').style.display = "none";
//     console.log("hello");
// }

const readMore = document.querySelector('.read-more-btn');
const content = document.querySelector('.content');

readMore.addEventListener('click', (e)=>{
    content.classList.toggle('more');
    if(readMore.innerText === 'Read More'){
        readMore.innerText = 'Read Less';
    }else{
        readMore.innerText = 'Read More';
    }
})