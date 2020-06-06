var db = require('./connect');
var userDataBase = {

    // Getting Data from data base;

    getItem = (callback , id)=>{
        var conn = db.getConnection(); // Connecting to the database
        conn.connect((err)=>{
            if(err){return callback(err,null)}
            else{
                var sql = "SELECT * from tablename WHERE id= ?"; //Sql query to query for data
                conn.query(sql , [id] ,(callback)=>{
                    if(err){return callback(err,null)} //if err return the err
                    else{return callback(null,result)} //else return the result
                })
            }
        })
    },

    // Updating data base

    updateItem = (callback,id,field1,field2)=>{
        var conn = db.getConnection(); // Connecting to the database
        conn.connect((err)=>{
            if(err){return callback(err,null)}
            else{
                var sql = "UPDATE tablename set field1=? field2=? WHERE id=?"; //Sql query to query for data
                conn.query(sql , [field1,field2,id] ,(callback)=>{
                    if(err){return callback(err,null)} //if err return the err
                    else{return callback(null,result)} //else return the result
                })
            }
        })
    },

    // Deleting Items in database

    deleteItem = (callback,id)=>{
        var conn = db.getConnection(); // Connecting to the database
        conn.connect((err)=>{
            if(err){return callback(err,null)}
            else{
                var sql = "DELETE from tablename WHERE id=?"; //Sql query to query for data
                conn.query(sql , [id] ,(callback)=>{
                    if(err){return callback(err,null)} //if err return the err
                    else{return callback(null,result.affectedRows)} //else return the result and the affected rows
                })
            }
        })
    },

    // Add new item

    updateItem = (callback,id)=>{
        var conn = db.getConnection(); // Connecting to the database
        conn.connect((err)=>{
            if(err){return callback(err,null)}
            else{
                var sql = "INSERT into tablename(field1,field2) values(?,?)"; //Sql query to query for data
                conn.query(sql , [field1,field2,id] ,(callback)=>{
                    if(err){return callback(err,null)} //if err return the err
                    else{return callback(null,result.affectedRows)} //else return the result and the affected rows
                })
            }
        })
    },

}


module.exports = userDB;
