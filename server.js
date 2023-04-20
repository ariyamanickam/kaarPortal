const express = require('express');
const path = require('path');
const app = express();
const custo = require('./server/customer/customer');
const vendor = require('./server/Vendor/vendor');
const employee = require('./server/employee/employee')
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/customer', custo);
app.use('/vendor', vendor);
app.use('/employee', employee);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  
});
app.listen(3000, () => console.log('Listening on port 3000...'));














