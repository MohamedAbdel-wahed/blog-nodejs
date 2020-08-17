const categories= document.querySelector('#categories');
const blogs= document.querySelectorAll('#blogs_container>div');
const heading= document.querySelector('#heading>span');
const notFoundCategory= document.querySelector('#not_found_category');

if(categories){
    categories.addEventListener('change',()=>{

        // hide all blogs 
        blogs.forEach(blog=>{
            blog.classList.add('hidden')
        })
    
        // show filtered blogs
        const selectedCategory = categories.options[categories.selectedIndex].value;
        heading.textContent=selectedCategory;
        if(selectedCategory=="All"){
            blogs.forEach(blog=>{
                blog.classList.remove('hidden')
            })
        }
        else{
            const filteredBlogs=document.querySelectorAll(`#${selectedCategory}`);
             if(filteredBlogs.length>0){
                filteredBlogs.forEach(blog=>{
                    blog.classList.remove('hidden');
                })
             }
             else{
                notFoundCategory.textContent=`We Couldn't Find Any ${selectedCategory} Blogs :(`;
             }
        }
          
    });
    
}
