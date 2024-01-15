const express =require("express");
const User =require("./routers/User.js") ;
const cookieParser =require("cookie-parser") ;
const fileUpload =require("express-fileupload") ;
const cors =require("cors") ;

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.use(cors());

app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.send("Server is working");
});
module.exports=app