import { NextApiRequest, NextApiResponse } from "next";
import { useEffect } from "react";
import { tournaments } from "~/data/data";
import { Tournament } from "~/types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  res.status(200).json(tournaments.find((t) => t.slug === slug) as Tournament);
}
