import initialState from './initialState'
import render from './render/renderNews';

export function getNewsByCat(id) {
    console.log(1);
    fetch(`http://localhost:4200/news/cat/${id}`)
    .then((res) => res.json())
    .then((news) => {

        console.log(news);
        initialState.news = news;
        render()
    }) 
}