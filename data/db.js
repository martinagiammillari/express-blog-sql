import mysql2 from mysql2;

const connection = mysql2.createConnection({
host: "localhost",
uses: "root",
password: "root",
database:"posts_db",

})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to Mysql");
})

export default connection;