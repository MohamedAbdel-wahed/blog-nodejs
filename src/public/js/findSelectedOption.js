/* Find the selected option to display in the edit-blog view */

const chosenCategory= document.querySelector('#blog_categories');
const allCategories= document.querySelectorAll('#blog_categories>option');

allCategories.forEach(category=>{
    if(category.value == chosenCategory.dataset.category){
        category.setAttribute('selected', true);
    }
});
