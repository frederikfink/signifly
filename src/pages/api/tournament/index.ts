import type { NextApiRequest, NextApiResponse } from "next";
import { tournaments } from "~/data/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(tournaments);
}
