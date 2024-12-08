require("dotenv").config();
const axios = require("axios");

exports.createTransaction = async (req, res) => {
   const { price } = req.body;

   try {
      const timestamp = Date.now();
      const order_id = `MentalQ-${timestamp}`;

      const requestBody = {
         transaction_details: {
            order_id: order_id,
            gross_amount: price,
         },
         credit_card: {
            secure: true,
         },
      };

      const response = await axios.post(
         "https://app.sandbox.midtrans.com/snap/v1/transactions",
         requestBody,
         {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Basic ${Buffer.from(
                  process.env.MIDTRANS_SERVER_KEY
               ).toString("base64")}:`,
            },
         }
      );

      res.status(200).json({
         message: "Transaction created successfully",
         error: false,
         data: {
            token: response.data.token,
            redirect_url: response.data.redirect_url,
         },
      });
   } catch (e) {
      res.status(500).json({ error: error.message });
   }
};
