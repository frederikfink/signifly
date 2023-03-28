import { FunctionComponent, useEffect, useState } from "react";
import { Tournament } from "~/types/types";

interface Team {
  name: string;
  player1Name: string;
  player2Name: string;
}

const TournamentEntry: FunctionComponent<Team> = ({
  name,
  player1Name,
  player2Name,
}) => (
  <>
    <div className="flex items-center justify-between rounded border bg-purple-light py-2 px-4">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-500">{player1Name}</p>
        <p className="text-gray-500">{player2Name}</p>
      </div>
      <div>
        <p className="text-sm">score</p>
        <p className="text-right text-xl">4</p>
      </div>
    </div>
  </>
);

const BracketTournament = ({ slug }: { slug: string }) => {
  const [tournament, setTournament] = useState<Tournament>();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/tournament/${slug}`);
      const data = await result.json();
      setTournament(data);
    }

    fetchData();
  }, []);

  // matches in initial round
  const teams = [1, 2, 3, 4];

  return (
    <div className="grid h-full grid-cols-3 gap-2 bg-yellow-light">
      <div id="round_1" className="flex flex-col justify-between gap-10">
        Group rounds
        {teams.map((t) => (
          <div className="flex grow flex-col justify-center gap-4 bg-green-light p-2">
            <div className="flex flex-col gap-2">
              <TournamentEntry
                name="United Ultras"
                player1Name="Frederik H."
                player2Name="Frederik H."
              />
              <TournamentEntry
                name="United Ultras"
                player1Name="Frederik H."
                player2Name="Frederik H."
              />
            </div>
          </div>
        ))}
      </div>
      <div id="round_quater_finals" className="flex flex-col gap-2">
        Semi final
        <div className="flex grow flex-col justify-center gap-4 bg-green-light p-2">
          <div className="rounded border bg-purple-light p-1">
            <h3 className="text-lg font-medium">Winner of match 1</h3>
            <p className="text-gray-500">?</p>
            <p className="text-gray-500">?</p>
          </div>
          <div className="rounded border bg-purple-light p-1">
            <h3 className="text-lg font-medium">Winner of match 2</h3>
            <p className="text-gray-500">?</p>
            <p className="text-gray-500">?</p>
          </div>
        </div>
        <div className="flex grow flex-col justify-center gap-4 bg-green-light p-2">
          <div className="rounded border bg-purple-light p-1">
            <h3 className="text-lg font-medium">Winner of match 3</h3>
            <p className="text-gray-500">?</p>
            <p className="text-gray-500">?</p>
          </div>
          <div className="rounded border bg-purple-light p-1">
            <h3 className="text-lg font-medium">Winner of match 4</h3>
            <p className="text-gray-500">?</p>
            <p className="text-gray-500">?</p>
          </div>
        </div>
      </div>
      <div id="round_semi_finals" className="flex flex-col gap-2">
        Final
        <div className="flex grow flex-col justify-center gap-4 bg-green-light p-2">
          <div className="rounded border bg-purple-light p-1">
            <h3 className="text-lg font-medium">Finalist 1</h3>
            <p className="text-gray-500">?</p>
            <p className="text-gray-500">?</p>
          </div>
          <div className="rounded border bg-purple-light p-1">
            <h3 className="text-lg font-medium">Finalist 2</h3>
            <p className="text-gray-500">?</p>
            <p className="text-gray-500">?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BracketTournament;
