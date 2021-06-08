require('dotenv').config()
const fs = require('fs')
const admin = require('firebase-admin')
const fetch = require('node-fetch')
// console.log(process.env.MAPBOX_ACCESS_TOKEN)
const MAPBOX_URI = function (longitude, latitude) {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
}

// fetch(MAPBOX_URI(71.3231, 29.8717), { method: 'GET' }).then(response => response.json()).then(jsonResponse => {
//     console.log(jsonResponse);
// })

// const fetchCountry = function (longitude, latitude) {
//     return new Promise((resolve, reject) => {
//         fetch(MAPBOX_URI(longitude, latitude)).then(response => response.json()).then(jsonResponse => {
//             let countryData = null
//             jsonResponse.features.forEach(feature => {
//                 if (feature.place_type.includes('country')) {
//                     countryData = feature
//                 }
//             })
//             resolve(countryData);
//         }).catch(err => reject(err))
//     })
// }
// fetchCountry(-63.086593336967795, 18.067219120768897).then(val => console.log(val))

admin.firestore().collection('Services').get().then(snapshot => {
    fs.appendFileSync('serviceData.js', 'const data = [ \n')
    snapshot.docs.forEach(async doc => {
        try {
            const serviceData = doc.data()
            const longitude = serviceData.LocationLongitude
            const latitude = serviceData.LocationLatitude
            fs.appendFile('serviceData.js', JSON.stringify(serviceData) + ',\n', () => { })
            // const Country = await fetchCountry(longitude, latitude);
            // admin.firestore().collection('Services').doc(doc.id).update({ Country })
            // admin.firestore().collection('ServiceLocations').doc(doc.id).update({ Country })
            // console.log(`Doc ${doc.id} Updated`, Country, '\n')
        } catch (err) {
            console.log(err);
        }
    })
    // fs.writeFileSync('locationData.json', JSON.stringify(locationData))
})