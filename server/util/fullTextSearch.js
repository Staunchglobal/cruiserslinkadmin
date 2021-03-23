const { MeiliSearch } = require('meilisearch');

const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    // apiKey: '793c93af9e13c8380ed364b042268dba4466fae33f79d636fbdb2d2275c450dd',
});

const admin = require('firebase-admin')

// admin.firestore().collection('Users').get().then(snapshot => {
//     client.index('UsersMeili')
//         .addDocuments(snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }))
//         .then(e => {
//             console.log(e);
//         }).catch(err => {
//             console.log(err);
//         })
//     console.log(client, client.index("UsersMeili"));

//     // snapshot.forEach(snap => {
//     //     // console.log(snap.data())
//     // })
// })
console.log(client);
client.index("UsersMeili").search('North America').then(results => console.log(results.hits)).catch(err => console.log(err))