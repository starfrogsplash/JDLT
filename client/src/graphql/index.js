import {gql} from 'apollo-boost';

export const GET_ALL_STOCK = gql `
    query {
        getAllStock {
            Supplier
            Product
            Price
            _id
        }
    }
    `