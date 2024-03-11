
let nav = document.querySelector("#nav")
         window.addEventListener("scroll",() => {
        setInterval(function(){
            nav.style.backgroundColor="rgba(0, 0, 0, 1)";
        },300)    
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
    take = JSON.stringify(take)

   
    
    task1.push(take)
   

    localStorage.setItem("deta",task1)

    console.log(task1)

    input1.value=''
    input2.value=''
    
})



















    

    

   
    
 
