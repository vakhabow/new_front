import { initialState } from '../initialState';

export const renderCategories = () => {

    const root = document.querySelector('.root');

    initialState.categories.forEach(category => {
        console.log(initialState);
        const sidebarWithCategories = document.createElement('div');
        console.log(category);
        sidebarWithCategories.textContent = category.name;

        root.prepend(sidebarWithCategories);

    });
}