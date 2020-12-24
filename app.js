const { error } = require('console')
const weather = require('./weather.js')


const query = process.argv[2]
if (query === undefined) {
    console.log('Please Enter the Location')
} else {
    weather(query, (error, { temp, location, descrp, }) => {
        if (error !== undefined) {
            console.log(error)
        } else {
            console.log('Temperatue : ' + temp)
            console.log('Location : ' + location)
            console.log('Description : ' + descrp)

        }
    })
}