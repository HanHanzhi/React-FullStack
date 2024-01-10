const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
/*listen(port number(cannot be same as the port we initialize our react application),
function that is going to run whenever server starts)*/
