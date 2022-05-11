export function footerNews() {
  
  const root = document.getElementById('root')
  const foot_main = document.createElement('div')
  foot_main.classList.add("foot_main")
  
  const contacts = document.createElement('div')
  contacts.classList.add('contacts')

  const icon = document.createElement('div')

  contacts.textContent = "mor"
  icon.textContent = "О нас"

  foot_main.append(contacts, icon)
  root.after(foot_main)
}
export default footerNews