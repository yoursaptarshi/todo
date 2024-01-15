const  app  =require("./app.js") ;
const { config } =require("dotenv") ;
const { connectDatabase } =require("./config/database.js") ;
const cloudinary =require("cloudinary") ;

config({
  path: "./config/config.env",
});
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
