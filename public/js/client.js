console.log('client side Javascript directory loaded !')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msgOne = document.querySelector('#forecastMsg')
const msgTwo = document.querySelector('#errormsg')

msgOne.textContent = 'Loading...'
msgTwo.textContent = ''

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
  
    fetch('http://localhost:3000/weather?address='+search.value).then((response) => {
        response.json().then((data) =>{
            if(data.error){
                msgOne.textContent = data.error;
            }else{
                msgOne.textContent = data.location
                msgTwo.textContent = data.forecast
            }
        })
    })

})