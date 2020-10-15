const request = require('request')

const forecast = (data, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ef3100f4c3046bf1a4cd9d6ac57bc4f4&query=${data.latitude},${data.longitude}`
    request({ url: url, json: true }, (error, response) => {
               
        const weather = {
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        place: data.placeName
        
            }
        callback(weather);
        

    })
}

module.exports = forecast
