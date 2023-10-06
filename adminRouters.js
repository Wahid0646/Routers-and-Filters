const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.send(`
    <form action="/admin/add-product" method="POST">
      <input type="text" name="productName" placeholder="Product Name">
      <input type="text" name="productSize" placeholder="Product Size">
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;
  console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
  res.send('Product added successfully!');
});

module.exports = router;
