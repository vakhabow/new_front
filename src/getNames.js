export function getNews() {
  fetch("http://localhost:4200/names")
    .then((res) => res.json())
    .then((names) => {
      initialState.names = names;
    }) 
}
