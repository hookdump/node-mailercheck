<a href="https://www.mailercheck.com"><img src="https://developers.mailercheck.com/logo.svg" width="200px"/></a>

Mailercheck Unofficial Node.js SDK

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)

<a name="installation"></a>

# Installation

## Setup

```bash
npm install mailercheck
```

<a name="usage"></a>

# Usage

Check a single email and get real-time response

```js
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
```

Response

```js
{ 
    message: 'valid', 
    status: 200 
}
```

# Support and Feedback

In case you find any bugs, submit an issue directly here in GitHub.

If you have any troubles using our API or SDK free to contact our support here: [https://www.mailercheck.com/support](https://www.mailercheck.com/support)

The official documentation is at [https://developers.mailercheck.com/](https://developers.mailercheck.com/)

<a name="license"></a>

# License

[The MIT License (MIT)](LICENSE)
