## node-security.txt

### Usage

#### Install with:

```bash
npm i express-security.txt -S
```

#### Add to your app with:

```javascript
const express = require('express')

const app = express()

app.get('/robots.txt', securityTxt({
  // your security address
  contact: 'email@example.com',
  // your pgp key
  encryption: 'encryption',
  // if you have a hall of fame for securty resourcers, include link here
  acknowledgements: 'http://acknowledgements.example.com'
}))
```
