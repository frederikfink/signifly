import { useEffect, useState } from "react";
import { type LeaderboardEntry } from "~/types/types";

const Leaderboard = ({ limit }: { limit: number }) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/leaderboard?limit=${limit}`);
      const data = (await result.json()) as LeaderboardEntry[];
      setLeaderboardData(data);
    }
    fetchData().catch(console.error);
  }, [limit]);

  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <table className="w-full">
      <thead className="text-sm">
        <tr>
          <th className="py-2 pr-4 text-left font-normal text-base-500">
            Team
          </th>
          <th className="px-4 py-2 text-left font-normal text-base-500">
            Point
          </th>
          <th className="px-4 py-2 text-left font-normal text-base-500">Won</th>
          <th className="px-4 py-2 text-left font-normal text-base-500">
            Draw
          </th>
          <th className="px-4 py-2 text-left font-normal text-base-500">
            Lost
          </th>
          <th className="px-4 py-2 text-left font-normal text-base-500">
            Goals
          </th>
          <th className="py-2 pl-4 text-left font-normal text-base-500">
            Diff
          </th>
        </tr>
      </thead>
      <tbody>
        {leaderboardData.map((l, i) => (
          <tr
            className="cursor-pointer rounded hover:bg-base-50 dark:hover:bg-base-800"
            key={i}
            onClick={() => handleLinkClick("/team")}
          >
            <th className="py-2 pr-4">
              <div className="text-left">
                <p className="text-xl font-medium">{l.team.name}</p>
                <p className="text-sm font-normal text-base-500">
                  {l.team.player1?.name}, {l.team.player2?.name}
                </p>
              </div>
            </th>
            <td className="px-4 py-2 font-mono text-2xl dark:text-base-0">
              {l.point}
            </td>
            <td className="px-4 py-2 font-mono dark:text-base-200">{l.won}</td>
            <td className="px-4 py-2 font-mono dark:text-base-200">{l.lost}</td>
            <td className="px-4 py-2 font-mono dark:text-base-200">{l.draw}</td>
            <td className="px-4 py-2 font-mono dark:text-base-200">
              {l.goals}/{l.goalsAgainst}
            </td>
            {l.goals > l.goalsAgainst ? (
              <td className="py-2 pl-4 font-mono text-green-bright">
                {l.goals - l.goalsAgainst}
              </td>
            ) : l.goalsAgainst > l.goals ? (
              <td className="py-2 pl-4 font-mono text-red-normal">
                {l.goals - l.goalsAgainst}
              </td>
            ) : (
              <td className="py-2 pl-4 font-mono text-base-900">0</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
