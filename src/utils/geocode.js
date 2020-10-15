const request = require('request')

const geoCode  = (address, callback) => {
    const gUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicG91cmlhcGE3NiIsImEiOiJja2ZvcjVuanowYjVtMnptcWV1NGh1eHVkIn0.fjj01qy7-dnsiJIdK7UqqQ&limit=1`
    request({ url: gUrl, json: true}, (error, response) => {
        if(error){
            callback({errMessage: 'Unable to connect to location service'} ,undefined)
        } else if(response.body.features.length === 0){
            callback({errMessage: 'Unable to find location, try another location'},undefined)
        }else{   
                const coordinates = {
                    latitude: response.body.features[0].center[1], 
                    longitude: response.body.features[0].center[0],
                    placeName: response.body.features[0].place_name
                }
                callback(undefined,coordinates); 
        }
    })

    
}

module.exports = geoCode