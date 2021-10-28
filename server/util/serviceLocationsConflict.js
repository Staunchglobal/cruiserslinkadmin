const admin = require('firebase-admin');

const resolveDeletedServiceLocations = async function () {
    try {
        // const services = await admin.firestore().collection('Services').get();
        const serviceLocations = await admin.firestore().collection('ServiceLocations').get();
        serviceLocations.docs.forEach(locdoc => {
            admin.firestore().collection('Services').doc(locdoc.id).get().then(docSnap => {
                if (!docSnap.exists) admin.firestore().collection('ServiceLocations').doc(locdoc.id).delete().then(_ => console.log(locdoc.id, ' has been deleted now'))
            })
        })
    } catch (err) {

    }
}
resolveDeletedServiceLocations();