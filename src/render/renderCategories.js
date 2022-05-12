import { initialState } from '../initialState';
import { getNewsByCat } from '../getNewsByCat';
import render from './renderNews';
import getNews from '../getNews';

export const 
renderCategories = () => {

    const root = document.querySelector('#root');
    const cat = document.createElement("div")
    cat.classList.add("add_cat")
     const allNews = document.createElement('div');
     allNews.textContent = 'Все новости'

   

    allNews.addEventListener('click', () => {
        getNews()
    })


    initialState.categories.forEach(category => {
        const sidebarWithCategories = document.createElement('div');
        sidebarWithCategories.textContent = category.name;
        sidebarWithCategories.addEventListener('click', () => getNewsByCat(category._id));
        
        cat.append(sidebarWithCategories)
        root.prepend(cat);
    });
    root.prepend(allNews)
}
export default renderCategories;
