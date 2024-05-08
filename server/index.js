const express = require("express");
const app = express();
const cors = require("cors"); //to entertain frontend and backend
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
const axios = require("axios");
const functionCall = async (companyName, categoryName, productId) => {
    const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response
}



// Loading environment variables from .env file
dotenv.config();


// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: `http://localhost:5173`, //frontend port number
        credentials: true,
    })
);

app.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, (req, res) => {
    const response = functionCall();
    console.log(response)
    return res.json({
        success: true,
        message: "Your server is up and running ...",
    });
});

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