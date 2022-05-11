import { initialState } from "../initialState";

export const renderComments = () => {
  const root = document.getElementById("root");
  initialState.comments.forEach((elem) => {
    const commentWrapper = document.createElement("div");
    const userName = document.createElement("div");
    const commentBody = document.createElement("div");
    
    userName.textContent = elem.user.name;
    commentBody.textContent = elem.text;
    commentWrapper.append(userName, commentBody);
    root.append(commentWrapper);
  });
};

export default renderComments;
