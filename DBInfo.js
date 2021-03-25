//const database = require('./db')
//  /DBBOX = URL
const GetDBInfo = (app,database) => {
    app.get('/DBBOX',(req,res) => {
        //console.log(req.query.username)
        database.getUserData(req.query.username, (err,data) => {
            console.log("data" + data);
           /* let getJSONobj = {
                username: data[0].username,
                password: data[0].password
            }
            res.send(JSON.stringify(getJSONobj))*/
        }).catch(err => {
            console.log(err);
        })
    })
}

//  /DBBOX = URL
const SetDBInfo = (app,database) => {
    app.post('/DBBOX',(req,res) => { //Post request Postman
        let buffer = [];
    
        req.on("data",(data) => {
            buffer.push(data)
        }).on("end", () => {
            const JSONobj = JSON.parse(decodeURIComponent(Buffer.concat(buffer).toString()))
            //console.log(JSONobj)
            
            database.InsertUserData(JSONobj.username, JSONobj.password).then(result => {
                res.send(`
                <html>
                    <body>
                        <h1>Data was inserted into the database!</h1>
                    </body>
                </html>
            `)
            }).catch(err => {
                console.log(err);
            })
        })
    })
}

module.exports = {
    SetDBInfo,
    GetDBInfo
}