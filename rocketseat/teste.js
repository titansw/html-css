const https = require('https')
const api = 'https://api.github.com/users/maykbrito'

https.get(api, res =>{
    console.log(res.statusCode);
})
console.log('conectando api');