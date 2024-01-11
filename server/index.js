const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

////Routers
////create endpoint "localhost:3001/post"
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
/*db.sequelize.sync() is a Sequelize method that synchronizes the 
defined models with the database. It creates or updates database 
tables based on the model definitions. It go over all the table in the models folder. 
This is a common step when setting up a new database or making changes 
to the existing database schema. Note that the sync method should be 
used with caution in production, as it can lead to data loss if not 
handled carefully. 
The then() method is used to execute code after the 
synchronization is complete. In this case, it starts the server using 
app.listen(3001, ...). The app object is expected to be defined elsewhere 
in your code and represents your Express.js application.*/

/*listen(port number(cannot be same as the port we initialize our react application),
function that is going to run whenever server starts)*/
