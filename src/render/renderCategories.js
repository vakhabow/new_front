import { initialState } from '../initialState';

export const renderCategories = () => {

    const root = document.querySelector('#root');
    const cat = document.createElement("div")
    cat.classList.add("add_cat")

    initialState.categories.forEach(category => {
        const sidebarWithCategories = document.createElement('div');
        sidebarWithCategories.textContent = category.name;
        
        cat.append(sidebarWithCategories)
        root.prepend(cat);


    });
}
export default renderCategories;
