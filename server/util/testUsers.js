const admin = require('firebase-admin');
const tipsAndTricks = require('./constants');

// admin.firestore().collection('Users').get().then(snapshot => {
//     console.log('Users -> ', snapshot.size)
//     console.log('Cruisers -> ', snapshot.docs.filter(x => x.data().userType === "cruiser").length)
//     console.log('Business -> ', snapshot.docs.filter(x => x.data().userType === "business").length)
// })

// admin.firestore().collection('Services').get().then(snapshot => {
//     console.log('Services -> ', snapshot.size);
//     for (let i = 1; i < 10; i += 1) {
//         if (i !== 4) {
//             console.log(i, snapshot.docs.filter(y => y.data().Category === i).length);
//         }
//     }
// })

const updateColumns = ['services_by_category', 'tips_and_tricks_by_category']

const serviceByCategory = function (id, name, collection, updateColumn, column) {
    admin.firestore().collection(collection).where(column, '==', id).get().then(snapshot => {
        const objectToAdd = {
            total: snapshot.size,
        }
        const keys = ['pending', 'active', 'inactive']
        console.log('\n')
        keys.forEach(y => {
            // console.log(y, ' -> ', snapshot.docs.filter(x => x.data().ServiceStatus === y).length)
            const num = snapshot.docs.filter(x =>
                collection === "TipsAndTricks" ?
                    x.data().status === y :
                    x.data().ServiceStatus === y).length
            objectToAdd[y] = num
            console.log(`${name}.${y}`, ' -> ', num)
        })
        console.log('\n')
        admin.firestore().collection('meta').doc('data').update({
            [`${updateColumn}.${id}`]: objectToAdd
        })
    })
}

const names = ["Yacht", "Marinas", "Food & Drinks", "Tips And Tricks", "Telecom", "Health", "Pets", "Government && Customs", "Miscellanous", "Messaging"]
// for (let i = 2; i < 10; i += 1) {
//     if (i !== 4)
//         serviceByCategory(i, names[i - 1], 'Services', updateColumns[0], "Category")
// }

// console.log('\n', '\n')

// tipsAndTricks.forEach(z => {
//     serviceByCategory(z.id, z.category_name, 'TipsAndTricks', updateColumns[1], "category")
// })

// admin.firestore().collection('TipsAndTricks').get().then(snapshot => {
//     console.log('Tips And Tricks -> ', snapshot.size);
// })


// admin.firestore().collection('Services').get().then(snapshot => {
//     console.log('Services -> ', snapshot.size);
//     const data = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
//     for (let i = 1; i < 10; i += 1) {
//         if (i !== 4) {
//             const _data = data.filter(d => d.Category === i)
//             console.log(names[i - 1], ' -> ', _data.length)
//             admin.firestore().collection('meta').doc('data').update({
//                 services: snapshot.size,
//                 [`services_by_category.${i}.total`]: _data.length,
//                 [`services_by_category.${i}.pending`]: _data.filter(x => x.ServiceStatus === "pending").length,
//                 [`services_by_category.${i}.active`]: _data.filter(x => x.ServiceStatus === "active").length,
//                 [`services_by_category.${i}.inactive`]: _data.filter(x => x.ServiceStatus === "inactive").length,
//             })
//         }
//     }
// })

