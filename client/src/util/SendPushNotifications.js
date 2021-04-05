const PushNotificationsURL = process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/send_push_notifications/" :
    "https://cruiserslink-admin.herokuapp.com/api/send_push_notifications"

export const SendPushNotifications = function (token, uid, title, body) {
    return new Promise(async (resolve, reject) => {
        try {
            const PushNotificationsAddress = new URL(PushNotificationsURL);
            PushNotificationsAddress.searchParams.append('uid', uid);
            PushNotificationsAddress.searchParams.append('title', title);
            PushNotificationsAddress.searchParams.append('body', body);
            console.log(PushNotificationsURL);
            const response = await fetch(PushNotificationsAddress, { method: 'POST', headers: { authorization: `bearer ${token}`, "Access-Control-Allow-Origin": 'http://localhost:3000', 'Access-Control-Allow-Credentials': 'true' } });
            if (response.status === 200) {
                const jsonResponse = await response.json();
                resolve(jsonResponse);
            } else {
                reject({ message: `Error Status ${response.status} while sending push notifications` });
            }
        } catch (err) {
            console.log(err);
            reject({ message: `${err.message} while sending push notifications` })
        }
    })
}