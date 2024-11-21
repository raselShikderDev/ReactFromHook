import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
const app = express()
const port = 3000

app.use(cors({
  origin: "http://localhost:5173",
  methods:["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}))
app.use(bodyParser.json())
app.use(express.json());


app.get('/', (req, res) => {
  console.log('Hello World!')
  res.send("home")
})
app.post('/', (req, res) => {
  console.log("Post request");
  console.log(req.body);
  
  res.send("Post Request in Home")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})