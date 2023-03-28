import { NextApiRequest, NextApiResponse } from "next";
import { tournaments } from "~/data/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tslug } = req.query;

  res.status(200).json(tournaments.find((t) => t.slug === tslug));
}
