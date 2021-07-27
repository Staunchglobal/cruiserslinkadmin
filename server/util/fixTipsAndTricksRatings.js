const admin = require('firebase-admin')

admin.firestore().collection('TipsAndTricks').get().then(snapshot => {
    snapshot.docs.forEach(async doc => {
        let total = 0;
        let rating = 0;
        const feedbacks = await admin
            .firestore()
            .collection('TipsAndTricksReviews')
            .doc(doc.id)
            .collection('ratings')
            .get();
        // console.log(doc.id, feedbacks.size)
        if (feedbacks.size > 0) {
            feedbacks.docs.forEach(feedback => {
                total += 1;
                rating += feedback.data().rating
            })
            console.log(doc.id, feedbacks.size, total, rating / total)
            await admin
                .firestore()
                .collection('TipsAndTricks')
                .doc(doc.id)
                .update({
                    numRating: total,
                    avgRating: rating / total,
                })
        }

    })
})