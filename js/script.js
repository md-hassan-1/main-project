
let nav = document.querySelector("#nav")
         window.addEventListener("scroll",()=>{
            if(window.scrollY >= 50){
                nav.classList.add('nav-scroll')
            }else if(window.scrollY < 50){
                nav.classList.remove('nav-scroll')

            }

         })


let input1 = document.querySelector("#name")
let input2 = document.querySelector("#email")
let form = document.querySelector("#fildata")
let salect = document.querySelector("#salect")

task1=[]
console.log(task1)

form.addEventListener("submit", function(e){
    e.preventDefault()

    salect.value=''

    let take = {name:input1.value,email:input2.value}
    take = JSON.parse(take)
    // take =take.split(",")

   
    
    task1.push(take)
   

    localStorage.setItem("deta",task1)

    console.log(task1)

    input1.value=''
    input2.value=''
    
})
$("#slick").slick({
         slidesToShow: 2,
      slidesToScroll: 1,
       dots: true,
       infinite: false,
       responsive:[
        {breakpoint:992,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                 dots: true,
                 infinite: false,

            }
        }
       ]
      
      
        
    })
