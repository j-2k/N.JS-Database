
const mongoose = require('mongoose')
const schemas = require('./Schema/FluffyKitten')

const connectToMYDB = () => {
    mongoose.connect(process.env.MYDB, {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {

        console.log('connected to db!');
        console.log(res);
        /*
        const fluffyKittensModel = mongoose.model('DBBOX',schemas.fluffyKittenSchema); //tell mongoose what the schema is (collection name , then what the schema is)
        fluffyKittensModel.insertMany({ name: 'testKitten', age: 21, owner: 'pepega'}).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        
        
        fluffyKittensModel.find({age:100}, (err,doc) => {
            console.log(err);
            console.log(doc);
        })
        
        */

    }).catch(err => {
        console.log(err);
    })
}

const InsertUserData = (username, password) => {

    const fluffyKittensModel = mongoose.model('dbboxes',schemas.fluffyKittenSchema); //tell mongoose what the schema is (collection name , then what the schema is)

    return fluffyKittensModel.insertMany({username, password})//promis when is run it will run and give feedback if it doesnt run gives a error
}

const getUserData = (username, callback) => {
    return mongoose.model('dbboxes',schemas.fluffyKittenSchema).find({username}, callback)
}

module.exports = 
{
    connectToMYDB,
    InsertUserData,
    getUserData
}
