const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/dfabcd2ba9f4a345e6db423e63ef22c0/' + latitude + ',' + longitude
 
    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '
            + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chances of rain')
        }
    })

}
module.exports = forecast;