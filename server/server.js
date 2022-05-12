require("dotenv").config();
const express = require("express");
const morgan  = require("morgan");
const db = require("./db");
const cors = require("cors");

const  app = express();


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