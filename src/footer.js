import img1 from "../img/facebook.jpg"
import img2 from "../img/insta.jpg"
import img3 from "../img/twitter.jpg"
import img4 from "../img/youtube.jpg"
export function footerNews() {
  
  const root = document.getElementById('root')
  const foot_main = document.createElement('div')
  foot_main.classList.add("foot_main")
  
  const contacts = document.createElement('div')
  contacts.classList.add('contacts')
  contacts.textContent = "+7 (999)-999-99-99"
  
  const icon = document.createElement('div')
  icon.textContent = "О нас"
  icon.a = "#"
  
  const sait = document.createElement('div')
  sait.classList.add('sait')
  const facebook = document.createElement('img')
  facebook.src = img1

  const insta = document.createElement('img')
  insta.src = img2

  const twitter = document.createElement('img')
  twitter.src = img3

  const youtube = document.createElement ('img')
  youtube.src = img4
  youtube.a = "#"

  sait.append(facebook,insta,twitter,youtube)
  foot_main.append(icon, sait, contacts)
  root.after(foot_main)
}
export default footerNews