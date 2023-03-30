import type { NextApiRequest, NextApiResponse } from "next";
import { tournaments } from "~/data/data";
import type { BracketTournament } from "~/types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  res
    .status(200)
    .json(tournaments.find((t) => t.slug === slug) as BracketTournament);
}
