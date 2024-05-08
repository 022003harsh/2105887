const axios = require('axios');
const cron = require('node-cron');


let accessToken = "";


const fetchAccessToken = async () => {
   try {
       const requestBody = {
           companyName: "productMart",
           clientID: "55b8dc8e-9201-4ff0-8394-4cbc5113c933",
           clientSecret: "mIkLkYEnlFhhmyFn",
           ownerName: "Harsh Raj",
           ownerEmail: "2105887@kiit.ac.in",
           rollNo: "2105887"
       };


       const response = await axios.post('http://20.244.56.144/test/auth', requestBody);
       accessToken = response.data.accessToken;


       console.log('Access token fetched:', accessToken);
   } catch (error) {
       console.error('Error fetching access token:', error);
   }
};


// Scheduling the cron job to fetch access token every 4 minutes
cron.schedule('*/4 * * * *', () => {
   console.log('Fetching access token...');
   fetchAccessToken();
}, {
   scheduled: true,
   timezone: "Asia/Kolkata"
});


exports.getTopProducts = async (req, res) => {
   try {
       const { companyname, categoryname } = req.params;
       const { top, minPrice, maxPrice } = req.query;


       const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products`, {
           params: {
               top: top,
               minPrice: minPrice,
               maxPrice: maxPrice
           },
           headers: {
               Authorization: `Bearer ${accessToken}`
           }
       });


       res.json(response.data);
   } catch (error) {
       console.error('Error fetching products:', error);
       res.status(500).json({ error: 'Internal Server Error' });
   }
};


exports.getProductDetails = async (req, res) => {
   try {
       const { companyname, categoryname, productid } = req.params;


       const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
           headers: {
               Authorization: `Bearer ${accessToken}`
           }
       });


       res.json(response.data);
   } catch (error) {
       console.error('Error fetching product details:', error);
       res.status(500).json({ error: 'Internal Server Error' });
   }
};
