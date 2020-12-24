const request = require('postman-request')

const weather = (query, callback) => {
    const QueryString = require('qs')
    const access_key = 'b830d6a2367d96920d7ab62472daf5cc'
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query' + encodeURI(query)

    request({ url, json: true }, (error, res, data) => {
        if (error) {
            callback('No Connection Available', undefined)
                // console.log('No Connection Available')
        } else if (data.error) {
            callback('Location is Invalid', undefined)
                // console.log('Location is Invalid');
        } else {
            callback(undefined, {
                    temp: data.current.temperature[0],
                    location: data.location.name,
                    descrp: data.weather_descriptions

                })
                // console.log('Location - ' + data.current.location.name)
                // console.log('Temperature - ' + data.current.temperature)
                // console.log('Description - ' + data.weather_descriptions)
        }
    })
}
module.exports = weather