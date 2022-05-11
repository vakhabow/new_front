import { getNewsById } from "../getNewsById";
import initialState from "../initialState";

export const render = () => {
  const root = document.getElementById("root");
  if (Array.isArray(initialState.news)) {
    root.textContent = ""

    initialState.news.forEach((news) => {
      const div = document.createElement("div");
      div.textContent = news.title;
      div.addEventListener("click", () => getNewsById(news._id));
      root.append(div);
    });
  }else{
    root.textContent = ""
    const title = document.createElement('h1')
    title.textContent = initialState.news.title

    const text = document.createElement('div')
    text.textContent= initialState.news.body

    // const comment = document.createElement('div')
    // comment.textContent = initialState.comments

    root.append(title,text)
  }
};
