require('../services/FirebaseAdminService')
const admin = require('firebase-admin')
const createEmail = (to, body, html = '') => {
    return {
        to: to,
        html: html,
        message: {
            subject: '[NO-REPLY] CruisersLINK Message',
            html: html,
            // text: `Dear User! \n
            //          ${body}
            //          Regards,
            //          CruisersLINK ADMIN
            //          `,

        }
    }
}
const email = "usamaimam1@gmail.com"
const body = "Just sending a test email"
const html = `<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">

  <title>CruisersLink Email Template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="CruisersLink Email Template">
  <meta name="author" content="System Plus">
  <meta name="robots" content="index,follow">

  <style type="text/css">
    a[x-apple-data-detectors] {
      color: inherit !important;
    }
  </style>

</head>

<body style="margin: 0; padding: 0;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0 30px 0;">

        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
          style="border-collapse: collapse; border: 1px solid #cccccc;">
          <tr>
            <td align="center"
              style="background: url('https://firebasestorage.googleapis.com/v0/b/cruisersadvisor.appspot.com/o/Mail%2Fwater-background.jpg?alt=media&token=b1b103a2-171e-4970-8276-f33615e6232f'); background-size: cover; background-repeat: no-repeat; padding: 0px 0 0px 0;">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cruisersadvisor.appspot.com/o/Mail%2Fcruise-white%20with%20NAME.png?alt=media&token=b2bec10c-20ac-44b3-83c6-d1a389c3f175"
                alt="Logo" width="500" style="display: block;" />
            </td>
          </tr>
          <tr>
            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="color: #153643; font-family: Arial, sans-serif;">
                    <h1 style="font-size: 24px; margin: 0;">New Service / Tip & Trick Added</h1>
                  </td>
                </tr>
                <tr>
                  <td
                    style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 0px 0;">
                    <p style="margin: 0;">
                      Dear CruisersLINK Admin,<br />
                      A new service/tip_and_trick has been added to the system. Please visit <a
                        href="https://www.cruiserslink-admin.herokuapp.com">https://www.cruiserslink-admin.herokuapp.com</a>
                      to approve or reject the newly added service or tip and trick.<br />
                      Regards,
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              style="padding: 30px 30px; background: url('https://firebasestorage.googleapis.com/v0/b/cruisersadvisor.appspot.com/o/Mail%2Fab.png?alt=media&token=c2879b3f-4999-41f3-93cb-a22a0980ac1f'); background-size: cover; background-repeat: no-repeat; border-top: 1px solid #000">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="color: #000; font-family: Arial, sans-serif; font-size: 14px;">
                    <p style="margin: 0;">&copy; CruisersLink 2021, All Rights Reserved<br />
                      <a href="mailto:admin@cruiserslink.com" style="color: #000;">admin@cruiserlink.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>

</html>`;
admin
    .firestore()
    .collection('mail')
    .add(createEmail(email, body, html))
    .then(snap => {
        // console.log(`Email Sent to ${ email }`)
    })