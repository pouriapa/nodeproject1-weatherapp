 

// fetch('http://localhost:3000/weather?address=b11oston').then((response)=>{

//    // console.log(response)
//  response.json().then((data)=>{
//          console.log(data)
//     })

// })

const weatherForm = document.querySelector('form')
const searchVal = document.querySelector('input')
 const temp = document.querySelector('#temp')
 const feelslike = document.querySelector('#feelslike')
 const loc =  document.querySelector('#location')

weatherForm.addEventListener('submit', (e)=>{

    
    e.preventDefault()
    const address = searchVal.value


     fetch(`/weather?address=${address}`).then((response)=>{
            response.json().then((data)=>{
                temp.textContent = `the temperature is : ${data.temperature}`
                feelslike.textContent =` but it feels like : ${data.feelslike}`
                loc.textContent = `in ${data.place}`

            })

    })

    

})