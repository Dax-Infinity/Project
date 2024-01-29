const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');


app.use(express.json());
app.use(cors())


app.post('/api/place-order', (req, res) => {
  console.log("new order :-");
  const { firstName, lastName, address, cartItems } = req.body;
  if (!firstName || !lastName || !address) {
    return res.status(400).json({ message: 'First name, last name, and address are required.' });
  }
  else {
    console.log('Order Details:');
    console.log('Name:', firstName, lastName);
    console.log('Address:', address);
    console.log('Cart Items:', cartItems);
    res.status(200).json({ message: 'Order placed successfully!' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
