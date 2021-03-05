const admin = require('firebase-admin');
admin.auth().listUsers().then((users) => {
    users.users.forEach(async (user) => {
        const userData = await admin.firestore().collection('Users').doc(user.uid).get();
        if (!userData.exists) {
           console.log(user)
        }
    })
})
