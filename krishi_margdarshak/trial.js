const observer = new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
       
            entry.target.classList.add('show')}
        
        
         else{
             entry.target.classlist.remove('show')
         }
    })
})

const elements = document.querySelectorAll('.vis')
elements.forEach((el)=>{
    observer.observe(el)
})