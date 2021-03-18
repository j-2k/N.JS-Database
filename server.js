const express = require('express')
const DBEndpoint = require('./DBInfo')
const database = require('./db')
const app = express()

const runServer = () => {
    database.connectToMYDB()
    DBEndpoint.GetDBInfo(app,database)
    DBEndpoint.SetDBInfo(app,database)

    app.get('/', (req,res) => {
        res.send(`
        <html>
            <body>
                <h1>WLC 2 MY DB</h1>
            </body>
        </html>
        `)
    })

    app.listen(process.env.PORT, () => {
        console.log('Server Started!');
    })
}

module.exports = {
    app,
    runServer
}