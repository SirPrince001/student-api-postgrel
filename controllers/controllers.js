const pool = require("../database/db");
const queries = require("../queries/queries");

const getStudent = (request, response) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    console.log(result.rows)
   return  response.status(200).json({ responseMessage: result.rows });
    
  });
};
const getStudentById = (request, response) => {
  const studentId = +(request.params.id);
  pool.query(queries.getStudentById, [studentId], (error, result) => {
    if (error) throw error;
    response.status(200).json({ responseMessage: result.rows.password });
  });
};

const addStudent = (request, response) => {
  const { name, email, password, age, dob } = request.body;

  // check if email exist
  // pool.query(queries.checkEmailExist, [email], (error, result) => {
  //   if (result.rows) {
  //     response.send("Email already exists.");
  //   }
    // add student to database
    pool.query(
      queries.addStudent,
      [name, email, password, age, dob],
      (error, result) => {
        if (error) throw error;
         response
          .status(201)
          .send({ responseMessage: result.rows });
          console.log(result.rows)
          
      }
    );
  //});
};

module.exports = {
  getStudent,
  getStudentById,
  addStudent,
};
