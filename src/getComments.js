import initialState from "./initialState";
import { renderComments } from "./render/renderComments";

export function getComments(id) {
  fetch(http://localhost:4200/comments/${id})
    .then((res) => res.json())
    .then((comments) => {
      initialState.comments = comments;
      renderComments()
    })
    .catch((e) => {
      console.log("Ошибка, брат:", e);
    });
}

export default getComments;