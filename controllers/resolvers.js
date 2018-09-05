exports.resolvers = {

    Query:{
        getAllStock: async (root, args, {Stock} ) => {
          const allStock = await Stock.find().sort({
            createdDate: "desc"
          });
            //return allStock
           return JSON.parse(JSON.stringify(allStock));
        },

        getStock: async (root, { _id }, {Stock} ) => {
          const stock = await Stock.findOne({_id});
          return JSON.parse(JSON.stringify(stock));
        },
    },

    Mutation: {
      addStock: async (
          root,
          { Supplier, Product, Price},
          { Stock }
        ) => {
          const newStock = await new Stock({
            Supplier,
            Product,
            Price,
          }).save();
          return JSON.parse(JSON.stringify(newStock));
        },

        deleteStock: async (root, {_id}, {Stock}) => {
          const stock = await Stock.findOneAndRemove({_id})
          return JSON.parse(JSON.stringify(stock))
        },
    }
}