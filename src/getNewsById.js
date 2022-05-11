import getComments from "./getComments";
import initialState from "./initialState";
import { render } from "./render/renderNews";

export function getNewsById(id) {
  fetch(`http://localhost:4200/news/${id}`)
    .then((res) => res.json())
    .then((news) => {
      
      initialState.news = news;
      getComments(id);
    });
}
export default getNewsById;
