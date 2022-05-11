import { initialState } from './initialState';
import { renderCategories } from './render/renderCategories'

export const getCategories = () => {
    fetch("http://localhost:4200/category")
        .then((res) => res.json()).then((category) => {
            initialState.categories = category;
            renderCategories();
        })
}
export default getCategories;

