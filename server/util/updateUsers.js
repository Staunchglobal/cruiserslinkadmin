const admin = require('firebase-admin');
const replaceByWith = [
    { beforeCategory: 2, beforeSubCategory: 201, afterCategory: 1, afterSubCategory: 116 },
    { beforeCategory: 2, beforeSubCategory: 202, afterCategory: 1, afterSubCategory: 117 },
    { beforeCategory: 7, beforeSubCategory: 701, afterCategory: 9, afterSubCategory: 909 },
    { beforeCategory: 7, beforeSubCategory: 702, afterCategory: 9, afterSubCategory: 910 },
    { beforeCategory: 7, beforeSubCategory: 703, afterCategory: 9, afterSubCategory: 911 },
    { beforeCategory: 5, beforeSubCategory: 501, afterCategory: 9, afterSubCategory: 912 },
    { beforeCategory: 5, beforeSubCategory: 502, afterCategory: 9, afterSubCategory: 913 },
]


replaceByWith.forEach(replace => {
    admin
        .firestore()
        .collection('ServiceLocations')
        .where('Category', '==', replace.beforeCategory)
        .where('SubCategory', '==', replace.beforeSubCategory)
        .get()
        .then(snap => {
            const data = snap.docs.map(doc => { return { id: doc.id, ...doc.data() } })
            data.forEach(updatedDoc => {
                admin
                    .firestore()
                    .collection('ServiceLocations')
                    .doc(updatedDoc.id)
                    .update({
                        Category: replace.afterCategory,
                        SubCategory: replace.afterSubCategory
                    }).then(e => {
                        console.log(`Doc ${updatedDoc.id} updated`)
                    })
            })
        })
})