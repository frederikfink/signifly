import { useRouter } from "next/router";
import { Props } from "next/script";
import { FunctionComponent } from "react";

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
    <div className="bg-blue-100 flex items-center justify-between rounded border py-2 px-4">
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

export default function Match() {
  const router = useRouter();
  const { id } = router.query;

  // matches in initial round
  const teams = [1, 2, 3, 4];

  const cols = Math.ceil(Math.log2(teams.length));

  return (
    <>
      <div className="bg-yellow-100 grid h-screen w-screen grid-cols-3 gap-2">
        <div id="round_1" className="flex flex-col justify-between gap-2">
          Group rounds
          {teams.map(() => (
            <div className="bg-green-100 flex grow flex-col justify-center gap-4 p-2">
              <div className="flex flex-col gap-4">
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
          <div className="bg-green-100 flex grow flex-col justify-center gap-4 p-2">
            <div className="bg-blue-100 rounded border p-1">
              <h3 className="text-lg font-medium">Winner of match 1</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
            <div className="bg-blue-100 rounded border p-1">
              <h3 className="text-lg font-medium">Winner of match 2</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
          </div>
          <div className="bg-green-100 flex grow flex-col justify-center gap-4 p-2">
            <div className="bg-blue-100 rounded border p-1">
              <h3 className="text-lg font-medium">Winner of match 3</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
            <div className="bg-blue-100 rounded border p-1">
              <h3 className="text-lg font-medium">Winner of match 4</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
          </div>
        </div>
        <div id="round_semi_finals" className="flex flex-col gap-2">
          Final
          <div className="bg-green-100 flex grow flex-col justify-center gap-4 p-2">
            <div className="bg-blue-100 rounded border p-1">
              <h3 className="text-lg font-medium">Finalist 1</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
            <div className="bg-blue-100 rounded border p-1">
              <h3 className="text-lg font-medium">Finalist 2</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
