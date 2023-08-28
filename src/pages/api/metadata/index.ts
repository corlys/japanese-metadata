
import { NextApiResponse, NextApiRequest } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).send("OK")
}

export default handler
