// const admin = require('firebase-admin');
// const geo = require('geofirex').init(admin);
// console.log(geo)
// const query = admin.firestore()
//     .collection('Services')
//     .get()
//     .then(snapshot => {
//         snapshot.docs.forEach(doc => {
//             admin.firestore().collection('Services').doc(doc.id).update({
//                 position: geo.point(doc.data().LocationLatitude, doc.data().LocationLongitude),
//             });
//         })
//     })

// // const snapshot = query.then(data => {
// //     console.log(data)
// // }).catch(err => {
// //     console.log(err)
// // })

