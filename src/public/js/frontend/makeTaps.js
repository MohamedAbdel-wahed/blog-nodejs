/* make Quotes taps to switch quotes in the home page */

const quotes= document.querySelectorAll('#blogs_quotes>div>article');
const quoteTabs_container= document.querySelector('#quote_tabs');
const quoteTabs= document.querySelectorAll('#quote_tabs>div');

quoteTabs_container.addEventListener('click', e=>{
    quoteTabs.forEach(tab=>{
        tab.classList.remove('activeTab');
        e.target.classList.add('activeTab');
    });

    quotes.forEach(quote=>{
        quote.classList.add('hidden');
        quote.classList.remove('flex');
        const quoteId= quote.getAttribute('id');
        if(quoteId==e.target.dataset.id){
            quote.classList.remove('hidden');
            quote.classList.add('flex');
        }
    })
});




