let url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

let countainer=document.querySelector(".countainer");

let responce=fetch(url)
responce.then((v)=>{
    return v.json();
}).then((newsdata)=>{
   
    for(let news of newsdata.articles){
        console.log(news);
        let h1 = document.createElement("h1");
        h1.textContent = news.author;
        
        let content = document.createElement("p");
        content.textContent = news.content;
        
        let image = document.createElement("img");
        image.src = news.urlToImage;
        
        countainer.appendChild(image); 
        countainer.appendChild(content);
        countainer.insertBefore(h1,content);
        
       

    }
})













