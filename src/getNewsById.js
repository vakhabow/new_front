import initialState from "./initialState";
import { render } from "./render/renderNews";

export function getNewsById(id) {
  fetch(`http://localhost:4200/news/${id}`)
    .then((res) => res.json())
    .then((news) => {
      console.log(news);
      
      initialState.news = news;
      render()
    });
}