const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));

// Create a connection with the database
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Nishanth@2002",
  database: "yellowowl"
});

// Connect to the database
db.connect((error) => {
  if (error) {
    console.error("Database connection failed:", error);
    return;
  }
  console.log("Database Connected Successfully");
});

// Insert data into the student table
app.post('/insert', (req, res) => {
  const { name, email, phone, enrollnumber, dateofadmission } = req.body;
  const sql = 'INSERT INTO student (name,email,phone,enrollnumber,dateofadmission) VALUES (?,?,?,?,?)';
  db.query(sql, [name, email, phone, enrollnumber, dateofadmission], (error, result) => {
    if (error) {
      console.error("Insert query failed:", error);
      res.status(500).send({ status: "error" });
      return;
    }
    res.send({ status: "success" });
  });
});

// Retrieve data from the student table
app.get('/getdata', (req, res) => {
  const sql = 'SELECT * FROM student';
  db.query(sql, (error, result) => {
    if (error) {
      console.error("Select query failed:", error);
      res.status(500).send(error);
      return;
    }
    res.send(result);
  });
});

 //Used to Update values in Student Table
 app.put('/update/:sno', (request, response) => {
  let { sno } = request.params;
  let { name, email, phone, enrollnumber, dateofadmission } = request.body;

  let sql = 'UPDATE student SET name = ?, email = ?, phone = ?, enrollnumber = ?, dateofadmission = ? WHERE sno = ?';

  db.query(sql, [name, email, phone, enrollnumber, dateofadmission, sno], (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      response.status(500).send({ status: 'error', message: 'Database query error' });
    } else {
      response.status(200).send({ status: 'success' });
    }
  });
});



// used to delete data from user
app.post('/delete', (request, response) => {
  let sno = request.body.sno;
  let sql = 'DELETE FROM student WHERE sno=?';
  db.query(sql, [sno], (error, result) => {
    if (error) {
      response.send({ "status": "error" });
      console.log(error);
    } else {
      response.send({ "status": "success" });
    }
  });
});



// single data
app.get('/single/:sno',(request,response)=>{
  let {sno}=request.params
  let sql='select * from student where sno=?'
  db.query(sql,[sno],(error,result)=>{
    if(error){
      response.send(error)
      console.log(error);
    }
    else{
      response.send(result)                                 
    }
  })
})





app.listen(9597, () => {
  console.log("Your server is running on port 9597");
});



