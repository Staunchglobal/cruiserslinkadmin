const { MeiliSearch } = require('meilisearch');
require('dotenv').config()
const client = new MeiliSearch({
    host: process.env.MEILISEARCH_CLIENT,
    apiKey: process.env.MEILISEARCH_API_KEY,
    // apiKey: '793c93af9e13c8380ed364b042268dba4466fae33f79d636fbdb2d2275c450dd',
});

const admin = require('firebase-admin')
// client.createIndex("UsersMeili").then(index => {
admin.firestore().collection('Users').get().then(snapshot => {
    client.index('UsersMeili')
        .addDocuments(snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }))
        .then(e => {
            console.log(e);
        }).catch(err => {
            console.log(err);
        })
    // console.log(client, client.index("UsersMeili"));

    // snapshot.forEach(snap => {
    //     // console.log(snap.data())
    // })
})
// })

// console.log(client);
client.index("UsersMeili").search('North America').then(results => console.log(results.hits)).catch(err => console.log(err))