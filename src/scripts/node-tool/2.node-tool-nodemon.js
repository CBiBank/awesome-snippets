// package.json
{
  "scripts": {
    "start": "nodemon"
  }
}
// nodemon.json
{
  "watch": ["app.js", "router"],
  "ignore": ["node_modules", "logs"],
  "ext": "js,json",
  "delay": "1000",
  "exec": "node app.js",
  "verbose": false,
  "legacyWatch": true
}
