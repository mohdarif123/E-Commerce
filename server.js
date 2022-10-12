const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KZAdcSEXD4l31rsd25MwPyj7uzHdZd2ItwDYqKSidFUfhAmMqtMT92ytt49swGK1QslbxdvlGv8duEM1BPqQ8TJ00Ko34g9J0"
);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
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
    const key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: "All Product",
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencykey: key }
    );
    status = "success";
  } catch (error) {
    console.log(error);
    status = "error";
  }
  res.json({ status });
});

const server = app.listen(8080, () => {
  console.log("Your app is running on port number 8080");
});
