function hoverEffect(item){
    document.getElementById(`item${item}`).style.visibility = 'visible'
    document.getElementById(`item${item}`).style.opacity = '1'
}
function normalEffect(item){
    document.getElementById(`item${item}`).style.visibility = 'hidden'
    document.getElementById(`item${item}`).style.opacity = '0'
}
let news=[];
getNews();
async function getNews(){
    await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=2ab3be648093412c8949b014dca49916")
    .then((response) => response.json())
    .then((json)=> news = json.articles);
    console.log(news);
    let newsItems =''
    for(let i=0;i<3;i++){
        newsItems += `<div class="newsItem">
        <div class="newsItem_img">
            <img src="${news[i].urlToImage}" alt="">
            </div>
           <p class="newsItem_date">${news[i].publishedAt}</p>
           <h3 class="newsItem_title">${news[i].title}</h3>
           <p class="newsItem_desc">${news[i].description}</p>
           <a class="newsItem_link" target="_blank" href="${news[i].url}">Read More</a>
         </div>`
    }
    document.getElementById('newsItems').innerHTML=newsItems;
}
let newItemsContainer=document.guerySelector(`.newItems`);
let new_btn=document.querySelector(`.new_btn`);
let api="https://newsapi.org/v2/everything?q=tesla&from=2023-02-28&sortBy=publishedAt&apiKey=2ab3be648093412c8949b014dca49916";

async function showFriendsList(){
    try{
        let response = await fetch(api)
        if (response.ok) {
            let data = await response.json()
            console.log(data);
        } else{
            console.log("Error HTTP: " + response.status);
        }
    }catch(error){
        console.log("Ошибка при выполнении запроса:" + error.message);
    }
}

function createNew(newsItemData){
    newsItemData.forEach(newItemData => {
        let newItem  = 
        `<div class="newItem">
        <div class="newItem_img">
            <img src="${new[i].urlToImage}" alt="">
            </div>
           <p class="newItem_date">${new[i].publishedAt}</p>
           <h3 class="newItem_title">${new[i].title}</h3>
           <p class="newItem_desc">${new[i].description}</p>
           <a class="newItem_link" target="_blank" href="${new[i].url}">Read More</a>
         </div>`;
         newContainer.insertAdjacentHTML('beforeEnd', newItem);
    });
};
new_btn.addEventListener('click' ,function()) {
    if(newItemContainer.childElementCout > 0){
        newItemContainer.newHTML=''
    } else {
        showFriendsList();
    }
}