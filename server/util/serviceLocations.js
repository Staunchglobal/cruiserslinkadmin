const admin = require('firebase-admin');
const geo = require('geofirex').init(admin);

admin.firestore().collection('Services').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        // console.log(doc.data().PublishedBy)
        // admin.firestore().collection('Users').doc(doc.data().PublishedBy).get().then(userSnap => {
        //     if (userSnap.data().userType) {
        //         admin.firestore().collection('Services').doc(doc.id).update({
        //             UserTypeWhenSubmitting: userSnap.data().userType
        //         }).then(e => {
        //             // console.log(`Doc updated in ${e.writeTime.seconds} seconds`)
        //         })
        //     } else {
        //         console.log(userSnap.id);
        //     }
        // })

        // admin.firestore().collection('ServiceLocations').doc(doc.id).set({
        //     position: geo.point(doc.data().LocationLatitude, doc.data().LocationLongitude),
        //     Category: doc.data().Category,
        //     SubCategory: doc.data().SubCategory,
        //     ProductName: doc.data().ProductName,
        //     PublishedBy: doc.data().PublishedBy,
        //     ProductDescription: doc.data().ProductDescription,
        // }).then(e => {
        //     console.log(`Doc added in ${e.writeTime} seconds`)
        // })
    })
}).catch(err => {
    console.log(err);
})

// admin.firestore().collection('Users').doc('ojjlqky7PcVR7fik3JBbBDPtgCK2').get().then(userSnap => {
//     console.log(userSnap.data())
// })