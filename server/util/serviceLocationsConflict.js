const admin = require('firebase-admin');

admin.firestore().collection('Services').get().then(docs => {
    docs.forEach(doc => {
        admin.firestore().collection('ServiceLocations').doc(doc.id).get().then(docSnap => {
            if (!docSnap.exists) console.log("Service Location ", doc.id, " has been deleted")
        })
    })
})