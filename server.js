const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KZAdcSEXD4l31rsd25MwPyj7uzHdZd2ItwDYqKSidFUfhAmMqtMT92ytt49swGK1QslbxdvlGv8duEM1BPqQ8TJ00Ko34g9J0"
);

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome into react shop websites");
});

app.post("/checkout", async (req, res) => {
  let error;
  let status;
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const charge = await stripe.charges.create({}, {});
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  console.log("Your app is running on port number 8080");
});
