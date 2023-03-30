import { useEffect, useState } from "react";
import { Match } from "~/types/types";
import Confetti from "./Confetti";

const Match = ({ matchId }: { matchId: number }) => {
  const [match, setMatch] = useState<Match | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/matches/${matchId}`);
      const match = (await result.json()) as Match;

      setMatch(match);
    };

    if (matchId !== null) {
      fetchData().catch(console.error);
    }
  }, [matchId]);

  const handleAddGoal = (team: "team1" | "team2") => {
    setShowConfetti(false);
    if (match !== null) {
      const updatedMatch = { ...match };

      if (team === "team1") updatedMatch.team1Goals += 1;
      if (team === "team2") updatedMatch.team2Goals += 1;

      setMatch(updatedMatch);

      if (updatedMatch.team1Goals == 10 || updatedMatch.team2Goals == 10) {
        setShowConfetti(true);
      }
    }
  };

  return (
    <>
      {match !== null && (
        <>
          {showConfetti && <Confetti />}
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
              <button
                onClick={() => handleAddGoal("team1")}
                className="btn bg-green-bright"
              >
                Add goal
              </button>
              <button className="btn text-base-0">Remove goal</button>
            </div>
            <div className="flex gap-2">
              <button className="btn text-base-0">Remove goal</button>
              <button
                onClick={() => handleAddGoal("team2")}
                className="btn bg-green-bright"
              >
                Add goal
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Match;
