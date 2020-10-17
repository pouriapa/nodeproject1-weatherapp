 

fetch('http://localhost:3000/weather?address=b11oston').then((response)=>{

   // console.log(response)
 response.json().then((data)=>{
         console.log(data)
    })

})

const weatherForm = document.querySelector('form')
const searchVal = document.querySelector('input')
weatherForm.addEventListener('submit', (e)=>{

    
    e.preventDefault()
    const address = searchVal.value


     fetch(`/weather?address=${address}`).then((response)=>{
            response.json().then((data)=>{
            console.log(data)
            })

    })

    

})