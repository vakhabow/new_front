import initialState from "./initialState";
import { render } from "./render/renderNews";

export function getNews() {
  fetch("http://localhost:4200/news")
    .then((res) => res.json())
    .then((news) => {
      initialState.news = news;

      render()
    });
}

export default getNews;
