import { NextApiRequest, NextApiResponse } from "next";
import {
  firstRoundMatches,
  secondRoundMatches,
  thirdRoundMatches,
  tournaments,
} from "~/data/data";
import { Match } from "~/types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const idNumber = parseInt(id as string, 10);

  console.log(id);

  res
    .status(200)
    .json(
      [...firstRoundMatches, ...secondRoundMatches, ...thirdRoundMatches].find(
        (match) => match.id === idNumber
      ) as Match
    );
}
