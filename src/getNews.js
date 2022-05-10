import initialState from "./initialState"

export function getNews() {
  fetch("http://localhost:4200/news")
  .then(res => res.json())
  .then(news => {
    initialState.news = news

    
  })
}

export default getNews; 
