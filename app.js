const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./adminRouters');
const shopRoutes = require('./shopRouters');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
