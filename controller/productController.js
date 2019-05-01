const Shopify = require('shopify-api-node');
const dotenv = require('dotenv').config();   
 
const shopify = new Shopify({
  shopName: process.env.SHOP,
  apiKey: process.env.API_KEY,
  password: process.env.PASSWORD
});



exports.product = (req, res) => {

   const page = +req.query.page || 1;
   const ITEMS_PER_PAGE = 10;
   let totalItems = 0;

   shopify.product.count()
   .then(pro => {
      totalItems = pro;
   })
   .catch(err => console.log(err))

   shopify.product.list({limit: ITEMS_PER_PAGE})
  .then(products => {
     console.log("totalItems",totalItems)
     res.render('index',{
        title: 'product',
        path: '/product',
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
        products
     })
  })
  .catch(err => console.error(err));

}
