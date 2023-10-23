import { NextApiRequest, NextApiResponse } from "next";

const midtransClient = require("midtrans-client");

let core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});
function handler(req: NextApiRequest, res: NextApiResponse) {
  const { order_id, total, name } = req.body;

  console.log(order_id, total, name);

  //   console.log();

  //   const param = {
  //     transaction_details: {
  //       order_id,
  //       gross_amount: Number(total),
  //     },
  //     customer_details: {
  //       first_name: name,
  //     },
  //   };

  //   core.createTransaction(param).then((transaction: any) => {
  //     let transactionToken = transaction.token;
  //     console.log(transactionToken);
  //   });

  res.status(200).json({});
}

export default handler;
