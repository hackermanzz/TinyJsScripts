// How to create a function to connect to a database using js

var mysql = require('mysql') // This will require you to install mysql (npm install mysql --save, npm install body-parser -save, npm install express --save)

var databaseConnect = { //function containing a call back that request a connection to the database using the data specified 
    getConnection: function(){// call back to an anonymous function
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root', // change this to your own password
            database: 'TestDataBase' // change this to your own database name
        });
        return conn
    }
}

module.exports = databaseConnect