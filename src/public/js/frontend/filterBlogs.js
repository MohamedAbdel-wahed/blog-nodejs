const categories= document.querySelector('#categories');
const blogs= document.querySelectorAll('#blogs_container>a');
const heading= document.querySelector('#heading>span');
const notFoundCategory= document.querySelector('#not_found_category');

if(categories){
    categories.addEventListener('change',()=>{

        // hide all blogs 
        blogs.forEach(blog=>{
            blog.classList.add('hidden') 
        })
    
        const selectedCategory = categories.options[categories.selectedIndex].value;
        const filteredBlogs=document.querySelectorAll(`#${selectedCategory}`);
        heading.textContent=selectedCategory;
        
        // show filtered blogs
        if(selectedCategory=="All"){
            blogs.forEach(blog=>{
                blog.classList.remove('hidden')
                notFoundCategory.textContent='';
            })
        }
        else if(filteredBlogs.length>0){
                filteredBlogs.forEach(blog=>{
                    blog.classList.remove('hidden');
                    notFoundCategory.textContent='';
                })
        }
        else{
           notFoundCategory.textContent=`We Couldn't Find Any ${selectedCategory} Blogs :(`;
        }
    });
}
