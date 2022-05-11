import { initialState } from "../initialState";

export const renderComments = () => {
  const root = document.getElementById("root");
  initialState.comments.forEach((elem) => {
    const commentWrapper = document.createElement("div");
    // console.log(commentWrapper);
    commentWrapper.textContent = elem.text;
    root.append(commentWrapper);
    console.log(initialState.comments)
  });
};

export default renderComments;
