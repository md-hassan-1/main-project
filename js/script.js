
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
let phone = document.querySelector("#tel")
let form = document.querySelector("#fildata")
// let salect = document.querySelector("#salect")

task1=[]
console.log(task1)

form.addEventListener("submit", function(e){
    e.preventDefault()

    // salect.value=''

    let take = [{name:input1.value},{email:input2.value},{phone:phone.value}]


   
   
    
    task1.push(take)
   

    localStorage.setItem("deta",JSON.stringify(task1))

    console.log(task1)

    input1.value=''
    input2.value=''
    phone.value=''
    
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
