const db = require('mysql2');
const connection = db.createConnection({
    host : 'localhost', 
    user : 'root', 
    database : 'library',
    password: "m-talking-2-u"

});
connection.connect((err) => {
    if(err){
        console.log("Error connecting to the database :" + err.stack);
    }
    console.log("Connection as id:" + connection.threadId);
});


module.exports = db;