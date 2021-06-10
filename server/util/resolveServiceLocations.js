const admin = require('firebase-admin');

// let ServiceLocations = {};
// let Services = []
// admin.firestore().collection('ServiceLocations').get().then(snap => {
//     snap.docs.forEach(doc => {
//         ServiceLocations[doc.id] = { ...doc.data(), id: doc.id }
//     })
// })
// admin.firestore().collection('Services').get().then(snap => {
//     Services = snap.docs.map(doc => { return { id: doc.id, ...doc.data() } })
// })

const asyncFunc = async function () {
    try {
        let Services = {};
        let ServiceLocations = [];
        const servicesSnap = await admin.firestore().collection('Services').get();
        servicesSnap.docs.forEach(doc => {
            Services[doc.id] = { ...doc.data(), id: doc.id }
        })
        const serviceLocationSnap = await admin.firestore().collection('ServiceLocations').get();
        ServiceLocations = serviceLocationSnap.docs.map(doc => { return { id: doc.id, ...doc.data() } })
        ServiceLocations.forEach(serviceLocation => {
            if (Services[serviceLocation.id]) {

            } else {
                console.log(serviceLocation.id)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
asyncFunc();