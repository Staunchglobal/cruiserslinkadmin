const admin = require('firebase-admin')

admin.firestore().collection('Services').where('id', '==', null).get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        admin.firestore().collection('Services').doc(doc.id).update({
            id: doc.id,
        })
        admin.firestore().collection('ServiceLocations').doc(doc.id).set({
            position: doc.data().position,
            Category: doc.data().Category,
            SubCategory: doc.data().SubCategory,
            ProductName: doc.data().ProductName,
            PublishedBy: doc.data().PublishedBy,
            ProductDescription: doc.data().ProductDescription,
            Country: doc.data().Country,
        })
    })
})