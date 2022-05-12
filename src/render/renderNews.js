import { getNewsById } from "../getNewsById";
import initialState from "../initialState";

const root = document.getElementById("root");
const news_con = document.createElement("div");
news_con.classList.add("add_news");

export const render = () => {

  news_con.textContent = "";

  if (Array.isArray(initialState.news)) {


    initialState.news.forEach((news) => {
      const div = document.createElement("div");
      div.classList.add("news_list")
      div.textContent = news.title;
      div.addEventListener("click", () => getNewsById(news._id));

      news_con.append(div);
      root.append(news_con);
    });
  } else {
    root.textContent = "";
    const title = document.createElement("h1");
    title.textContent = initialState.news.title;

    const text = document.createElement("div");
    text.textContent = initialState.news.body;

    // const comment = document.createElement('div')
    // comment.textContent = initialState.comments
    news_con.append(title, text);
    root.append(news_con);
  }
};
export default render;
