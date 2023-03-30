import type { NextApiRequest, NextApiResponse } from "next";
import { teams } from "~/data/data";
import type { LeaderboardEntry } from "~/types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const leaderBoardEntries: LeaderboardEntry[] = [
    {
      team: teams[0]!,
      point: 43,
      won: 4,
      draw: 0,
      lost: 10,
      goals: 43,
      goalsAgainst: 99,
    },
    {
      team: teams[1]!,
      point: 43,
      won: 10,
      draw: 0,
      lost: 10,
      goals: 43,
      goalsAgainst: 4,
    },
  ];
  res.status(200).json(leaderBoardEntries);
}
