import { useEffect, useState } from "react";
import { Match } from "~/types/types";

const Match = ({ matchId }: { matchId: number | null }) => {
  const [match, setMatch] = useState<Match | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/matches/${matchId}`);
      const data = (await result.json()) as Match;

      setMatch(data);
    }
    if (matchId !== null) {
      fetchData();
    }
    console.log(matchId);
  }, []);

  return (
    <>
      {match !== null && (
        <>
          <div className="mb-4 flex w-full items-center justify-between border-b border-base-700 pb-4">
            <div className="text-left">
              <h5>{match.team1.name}</h5>
              <p className="text-sm text-base-500">
                {match.team1.player1?.name}, {match.team1.player2?.name}
              </p>
            </div>
            <div className="flex gap-4">
              <h1>{match.team1Goals}</h1>
              <h1>-</h1>
              <h1>{match.team2Goals}</h1>
            </div>
            <div className="text-right">
              <h5>{match.team2.name}</h5>
              <p className="text-sm text-base-500">
                {match.team2.player1?.name}, {match.team2.player2?.name}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <button className="btn bg-green-bright">Add goal</button>
              <button className="btn text-base-0">Remove goal</button>
            </div>
            <div className="flex gap-2">
              <button className="btn text-base-0">Remove goal</button>
              <button className="btn bg-green-bright">Add goal</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Match;
