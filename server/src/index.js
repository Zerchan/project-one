const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());
// decode JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
  const { qid } = req.cookies;
  if(qid){
    const { userId } = jwt.verify(qid, process.env.APP_SECRET);
    // put the userId onto the req for future request to access
    req.userId = userId;
  }
  next();
});


server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
