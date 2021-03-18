//npm start to run

//const express = require('express')
//const { connectToMYDB }= require('./db.js')
const runEnv = require('./env.js')
const server = require('./server')

//connectToMYDB()
runEnv()
server.runServer()

/*
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1> WLC WLC WLC! </h1>
        </body>
    </html>
    `)
})


app.listen(process.env.PORT, () => {
console.log('server started!');
})
*/


