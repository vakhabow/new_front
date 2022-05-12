import img from "../img/header.jpg";
export function headerNews() {
  const root = document.getElementById("root");

  const header = document.createElement("div");
  // const h1 = document.createElement('img')
  // h1.src = img
  header.classList.add("header");
  header.src = img

  const title = document.createElement("h1");
  title.classList.add("time");
  title.textContent = 'NEWS'
  // time.src = img;
  //  time.innerHTML = date_time()

  const join = document.createElement("div");
  join.classList.add("join");
  join.textContent = "Войти";
  join.a = '#'

  const authorization = document.createElement("div");
  authorization.classList.add("author");
  authorization.textContent = "Авторизация";

  header.append(title, join, authorization);
  root.before(header);

  // function date_time()
  // {
  //     const current_datetime = new Date();
  //     const day = zero_first_format(current_datetime.getDate());
  //     const month = zero_first_format(current_datetime.getMonth()+1);
  //     const year = current_datetime.getFullYear();
  //     const hours = zero_first_format(current_datetime.getHours());
  //     const minutes = zero_first_format(current_datetime.getMinutes());

  //     return day+"."+month+"."+year+" "+hours+":"+minutes;
  // };

  /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
  // document.querySelector('.time').innerHTML = date_time();
}

export default headerNews;
