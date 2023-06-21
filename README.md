<a href="https://www.mailercheck.com"><img src="https://developers.mailercheck.com/logo.svg" width="200px"/></a>

# node-mailercheck

Mailercheck Unofficial Node.js Library

*Based on another unofficial Library: https://github.com/devjavi/mailercheck*

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)

<a name="installation"></a>

# Installation

## Setup

```bash
npm install node-mailercheck
```

<a name="usage"></a>

# Usage

Check a single email and get real-time response

```js
// import { default as MailerCheck } from 'node-mailercheck';
const MailerCheck = require('node-mailercheck');
const client = new MailerCheck({ api_key: "api_key" });

async function test() {
  const singleCheck = await client.checkEmail({ email: "test@mailercheck.com" });

  const { id } = await client.createList({ emails: ["first@foo.com", "second@foo.com"] });

  const { status } = await client.verifyList({ id });

  const { emails, has_more_pages } = await client.getListResults({ id });

  console.log('Has more pages?', has_more_pages);
  console.log(emails);
```

Single check response

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
