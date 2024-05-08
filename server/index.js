const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");


// Importing controllers
const { getTopProducts, getProductDetails } = require("./controllers");


// Loading environment variables from .env file
dotenv.config();


// Middlewares
app.use(express.json());
app.use(cors({
   origin: `http://localhost:5173`,
   credentials: true,
}));


// Routes
app.get("/test/companies/:companyName/categories/:categoryName/products", getTopProducts);
app.get("/test/companies/:companyName/categories/:categoryName/products/:productId", getProductDetails);


app.get("/", (req, res) => {
   return res.json({
       success: true,
       message: "Your server is up and running ...",
   });
});


// Listening to the server
app.listen(PORT, () => {
   console.log(`App is listening at ${PORT}`);
});
