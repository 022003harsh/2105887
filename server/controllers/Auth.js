
export const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        res.json(response.data);