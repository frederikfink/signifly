import { NextApiRequest, NextApiResponse } from "next";
import { LeaderboardEntry, Player, Team } from "~/types/types";

const players: Player[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
  { id: 4, name: "Alice Lee" },
];

const teams: Team[] = [
  {
    name: "Team A",
    slug: "team-a",
    player1: players[0] ?? null,
    player2: players[1] ?? null,
  },
  {
    name: "Team B",
    slug: "team-b",
    player1: players[2] ?? null,
    player2: players[3] ?? null,
  },
];

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
      team: teams[0]!,
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
