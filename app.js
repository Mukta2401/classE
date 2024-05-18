let bar = document.querySelector('.bar')
let sideBar = document.querySelector('#sideBar')
let cross = document.querySelector('.cross')

bar. addEventListener('click', ()=>{
   
   sideBar.classList.add('active');
})

cross.addEventListener('click', ()=>{
    
    sideBar.classList.remove('active'); 
   
})

sideBar. addEventListener('click',function(e){
     if(e.target.classList.contains('active')== true){
     sideBar.classList.remove 
      console.log(e.target)
     }
})