
const uniformResourceLocator = require('url');

const URL = 'http://localhost:8800/home.html?year=2018&month=feb'

var q = uniformResourceLocator.parse(URL, true)

console.log('Hostname', q.hostname)
console.log('Pathname', q.pathname)
console.log('Search ', q.search)