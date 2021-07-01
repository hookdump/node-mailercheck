const MailerCheck = require('../index')

const mailercheck = new MailerCheck(
    {
        api_key: "api_key"
    }
)

mailercheck.checkEmail("test@mailercheck.com")
    .then((response) => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

