import { initialState } from "../initialState";

export const renderComments = () => {
  const root = document.getElementById("root");
  initialState.comments.forEach((elem) => {
    const commentWrapper = document.createElement("div");
    commentWrapper.textContent = elem;
    root.append(commentWrapper);
  });
};

export default renderComments