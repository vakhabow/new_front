import img from "../img/header.jpg";
export function headerNews() {
  const root = document.getElementById("root");

  const header = document.createElement("div");

  header.classList.add("header");
  header.src = img

  const title = document.createElement("h1");
  title.classList.add("time");
  title.textContent = 'NEWS'
  title.style.marginTop = '0px'

  const userFunc = document.createElement('div');
  userFunc.style.width = '200px'
  userFunc.style.display = 'flex';
  userFunc.style.justifyContent = 'space-Between';

  const allDate = document.createElement('div');

  const date = document.createElement('div');
  const data = new Date();
  const year = data.getFullYear();
  const day = data.getDate();
  
  const allTime = document.createElement('div');
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  
  date.textContent = `Сегодня ${day} мая ${year} года`;
  allTime.textContent = `Текущее время: ${hour}:${minutes}:${seconds}`

  
  allDate.prepend(date, allTime);



  const join = document.createElement("div");
  join.classList.add("join");
  join.textContent = "Войти";
  join.a = '#'

  const authorization = document.createElement("div");
  authorization.classList.add("author");
  authorization.textContent = "Регистрация";



  header.style.display = 'flex';
  header.style.justifyContent = 'space-Between'

  userFunc.append(join, authorization)
  header.append(title, allDate, userFunc);
  root.before(header);

}

export default headerNews;
