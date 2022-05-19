require("dotenv").config();
const express = require("express");
const morgan  = require("morgan");
const db = require("./db");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const discordStrategy = require('./straterg/discordstraterg');
const data = require('./database/database');
const  app = express();


data.then(() => 
  console.log("Connected to database")
).catch(err => console.log(err));
//Routes 
const authRoute = require("./routes/auth");
const playerRoute = require("./routes/player");

app.use(session({
  secret: 'some random secret',
  cookie: {
    maxAge: 60000 * 60 * 24 
  },
  saveUninitialized: false,
  name: 'discord-auth',
}))

//passport 
app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use('/auth' , authRoute);
app.use('/players', playerRoute);

function isAuthorized(req, res, next) {
  if (req.isAuthenticated()) {
   res.redirect('/players')
  }
  else{
   next();
  }
}

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/information", async (req, res) => {
  try{
    const results = await db.query("SELECT * FROM information");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        information: results.rows[0],
      },
    })
  }catch (err) {
    console.log(err)
  }
});

app.get("/api/v1/information/:id", async(req, res) => {
  console.log(req.params.id);

  try{
    const results = await db.query(
   "select * from information where id = $1", [req.params.id]
    )
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        information: results.rows[0],
      },
    })
  } catch (err) {
    console.log(err)
  }
});

app.post("/api/v1/information", async (req, res) => {
console.log(req.body);

try{
  const results = await db.query(
    "insert into information (name, email,) values ($1, $2) returning *;",
    [req.body.name, req.body.email]
    )
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        information: results.rows[0],
      },
    });
  }catch (err) {
   console.log(err)
  }
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});