const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Import Routes
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");

dotenv.config();

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to database!"))
  .catch(err => {
    console.log(`Database Connection Error: ${err.message}`);
  });

app.prepare().then(() => {
  const server = express();

  // Middleware
  server.use(express.json());

  // Routes Middleware
  server.use("/api/user", authRoute);
  server.use("/api/admin", adminRoute);

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
