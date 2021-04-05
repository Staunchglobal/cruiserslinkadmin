const admin = require('firebase-admin')
module.exports = (app) => {
    app.post('/api/send_push_notifications', async (req, res) => {
        try {
            const { uid, title, body } = req.query;
            console.log(req.query);
            const adminToken = req.headers['authorization'].split(' ')[1]
            const adminRecord = await admin.auth().getUser(adminToken);
            if (adminRecord.customClaims.admin) {
                const snapshot = await admin.firestore().collection('FCMTokens').where('belongsTo', '==', uid).get();
                const tokens = snapshot.docs.map(doc => doc.id)
                const batchResponses = await admin.messaging().sendMulticast({ tokens: tokens, notification: { title, body } });
                res.send(batchResponses);
            } else {
                res.status(401).send({ message: 'Not Authorized', code: 401 })
            }
        } catch (err) {
            console.log(err.message);
            res.status(401).send({ message: err.message })
        }
    })
}