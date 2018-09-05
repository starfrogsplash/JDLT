const axios = require("axios");

describe('stock resolvers', ()=>{
    test('all stock', async () => {
        const response = await axios.post('http://localhost:4444/graphql', {
            query: `
            query {
                getAllStock{
                  Supplier
                  Product
                  Price
                      _id
                }
              }
            `
        });

        const { data } = response;
        expect(data).toMatchObject({
            "data": {
                "getAllStock": [
                  {
                    "Supplier": "New Co Ltd",
                    "Product": "Small wongle",
                    "Price": "5",
                    "_id": "5b8da3627fb32e1a443c40d0"
                  },
                  {
                    "Supplier": "New Co Ltd",
                    "Product": "Large wongle",
                    "Price": "8",
                    "_id": "5b8da3f17fb32e1a443c40d1"
                  },
                  {
                    "Supplier": "New Co Ltd",
                    "Product": "Super wongle",
                    "Price": "12",
                    "_id": "5b8da40e7fb32e1a443c40d2"
                  },
                  {
                    "Supplier": "Old Co Ltd",
                    "Product": "Mini wongle",
                    "Price": "4",
                    "_id": "5b8da42c7fb32e1a443c40d3"
                  },
                  {
                    "Supplier": "Old Co Ltd",
                    "Product": "Small wongle",
                    "Price": "6",
                    "_id": "5b8da43e7fb32e1a443c40d4"
                  },
                  {
                    "Supplier": "Old Co Ltd",
                    "Product": "Large wongle",
                    "Price": "9",
                    "_id": "5b8da44f7fb32e1a443c40d5"
                  },
                  {
                    "Supplier": "Old Co Ltd",
                    "Product": "Super wongle",
                    "Price": "13",
                    "_id": "5b8da45a7fb32e1a443c40d6"
                  }
                ]
              }
            });
          });

          test('get single stock', async () => {
            const response = await axios.post('http://localhost:4444/graphql', {
                query: `
                query {
                    getStock( _id: "5b8da3627fb32e1a443c40d0"){
                      Product
                      Supplier
                      _id
                    }
                  }
                `
            });
    
            const { data } = response;
            expect(data).toMatchObject({
                    "data": {
                      "getStock": {
                        "Product": "Small wongle",
                        "Supplier": "New Co Ltd",
                        "_id": "5b8da3627fb32e1a443c40d0"
                      }
                    }
                });
              });

});