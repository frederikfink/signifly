import { useRouter } from "next/router";

export default function Match() {
  const router = useRouter();
  const { id } = router.query;

  // matches in initial round
  const teams = [1, 2, 3, 4];

  const cols = Math.ceil(Math.log2(teams.length));

  return (
    <>
      <div className="grid h-screen w-screen grid-cols-3 gap-2 bg-yellow-100">
        <div id="round_1" className="flex flex-col justify-between gap-2">
          Group rounds
          {teams.map(() => (
            <div className="flex grow flex-col justify-center gap-4 bg-green-100 p-2">
              <div className="flex flex-col gap-4">
                <div className="rounded border bg-blue-100 p-1">
                  <h3 className="text-lg font-medium">United Ultras</h3>
                  <p className="text-gray-500">Frederik H.</p>
                  <p className="text-gray-500">Lars H.</p>
                </div>
                <div className="rounded border bg-blue-100 p-1">
                  <h3 className="text-lg font-medium">United Ultras</h3>
                  <p className="text-gray-500">Frederik H.</p>
                  <p className="text-gray-500">Lars H.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="round_quater_finals" className="flex flex-col gap-2">
          Semi final
          <div className="flex grow flex-col justify-center gap-4 bg-green-100 p-2">
            <div className="rounded border bg-blue-100 p-1">
              <h3 className="text-lg font-medium">Winner of match 1</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
            <div className="rounded border bg-blue-100 p-1">
              <h3 className="text-lg font-medium">Winner of match 2</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
          </div>
          <div className="flex grow flex-col justify-center gap-4 bg-green-100 p-2">
            <div className="rounded border bg-blue-100 p-1">
              <h3 className="text-lg font-medium">Winner of match 3</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
            <div className="rounded border bg-blue-100 p-1">
              <h3 className="text-lg font-medium">Winner of match 4</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
          </div>
        </div>
        <div id="round_semi_finals" className="flex flex-col gap-2">
          Final
          <div className="flex grow flex-col justify-center gap-4 bg-green-100 p-2">
            <div className="rounded border bg-blue-100 p-1">
              <h3 className="text-lg font-medium">Finalist 1</h3>
              <p className="text-gray-500">?</p>
              <p className="text-gray-500">?</p>
            </div>
            <div className="rounded border bg-blue-100 p-1">
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
