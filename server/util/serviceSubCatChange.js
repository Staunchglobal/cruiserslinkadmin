const admin = require('firebase-admin')

admin.firestore().collection('Services').where('SubCategory', '==', 203).get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        admin.firestore().collection('Services').doc(doc.id).update({
            SubCategory: 201,
        }).then(_ => { })
    })
})