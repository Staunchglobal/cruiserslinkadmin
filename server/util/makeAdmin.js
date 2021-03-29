const admin = require('firebase-admin')
const makeAdmin = function (uid) {
    admin
        .auth()
        .setCustomUserClaims(uid, { admin: true })
        .then(() => {
            admin.firestore().collection('admins').doc(uid).set({ isAdmin: true }).then(e => {
                console.log(`Custom claim set for uid ${uid}`)
            }).catch(err => console.log(err))
        }).catch(err => console.log(err));
}
const uidToMakeAdmin = 'yUy3Uqzj2VPmAKqw6AHhIbEFhep2'
// makeAdmin(uidToMakeAdmin)

admin.auth().getUser(uidToMakeAdmin).then(userRecord => {
    console.log(userRecord);
})

// const addAttribute = async function (ref) {
//     try {
//         const userDocs = await admin.firestore().collection(ref).get()
//         userDocs.docs.forEach(doc => {
//             admin.firestore().collection(ref).doc(doc.id).update({
//                 status: "pending",
//             })
//         })
//     } catch (err) {

//     }
// }