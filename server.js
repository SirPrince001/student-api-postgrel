const express = require("express");
const studentRoute = require("./routes/index");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/", (request, response) => {
  //response.send('Welcome')
    response.status(200).json({ message: "Hello world, Welcome to our postgres" });
});


app.use(studentRoute);



app.listen(port, () => console.log(`App is up and running on port ${port}`));
