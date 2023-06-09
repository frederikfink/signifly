import { useEffect, useState } from "react";
import {
  BracketTournament,
  type Match as MatchType,
  type Team,
} from "~/types/types";
import Match from "../match/Match";
import Modal from "../utility/Modal";

// quick and dirty formatting
// should probably look into fixing this
const formatDate = (date: Date): string => {
  const now = new Date();
  const timeDiff = now.getTime() - date.getTime();
  const secondsDiff = Math.floor(timeDiff / 1000);
  const minutesDiff = Math.floor(secondsDiff / 60);
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (daysDiff > 0) {
    return rtf.format(-daysDiff, "day");
  } else if (hoursDiff > 0) {
    return rtf.format(-hoursDiff, "hour");
  } else if (minutesDiff > 0) {
    return rtf.format(-minutesDiff, "minute");
  } else {
    return rtf.format(-secondsDiff, "second");
  }
};

const TournamentEntry = ({
  team,
  goals,
  date,
}: {
  team: Team;
  goals: number;
  date: Date | undefined;
}) => (
  <>
    <div
      className={`flex items-center justify-between rounded border py-2 px-4 backdrop-blur-sm ${
        goals == 10
          ? "border-yellow-normal bg-yellow-light dark:bg-yellow-normal/20"
          : "border-base-300 bg-base-0/40 dark:border-base-700 dark:bg-base-900/50"
      }`}
    >
      <div>
        <h5 className="flex items-center text-lg font-medium dark:text-base-0">
          {goals === 10 && <h3 className="mr-2 mb-1 text-2xl">👑</h3>}
          {team.name}
        </h5>
        <p className="text-sm text-base-500">
          {team.player1?.name}, {team.player2?.name}
        </p>
      </div>
      <div>
        <p className="text-right text-sm">score</p>
        <p className="text-right text-xl">{goals}</p>
        <p className="text-xs">
          {date === undefined ? "" : formatDate(new Date(date))}
        </p>
      </div>
    </div>
  </>
);

const BracketTournament = ({ slug }: { slug: string }) => {
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);
  const [tournament, setTournament] = useState<BracketTournament>();
  const [matchModalIsOpen, setMatchModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/tournament/${slug}`);
      const data = (await result.json()) as BracketTournament;

      setTournament(data);

      if (tournament == undefined) {
        return;
      }
    }

    fetchData().catch(console.error);
  }, [tournament, slug]);

  const handleModalClose = () => {
    setMatchModalIsOpen(false);
  };

  const handleMatchClick = (matchId: number) => {
    setSelectedMatchId(matchId);
    setMatchModalIsOpen(true);
  };

  return (
    <>
      <Modal
        title={"Match"}
        isOpen={matchModalIsOpen}
        onClose={handleModalClose}
      >
        <Match matchId={selectedMatchId ?? 0} />
      </Modal>

      {tournament == undefined ? (
        <p className="text-red-normal">No tournament found for this slug</p>
      ) : (
        <div className="grid h-full min-w-[1000px] grid-cols-3 gap-2">
          <div id="round_1" className="flex flex-col justify-between gap-10">
            Group rounds
            {tournament.rounds[0]?.matches.map((m: MatchType) => (
              <div
                key={m.id}
                className="flex grow cursor-pointer flex-col justify-center gap-4 rounded-lg p-3 backdrop-blur-sm transition-all duration-150 hover:bg-base-0/80 dark:hover:bg-base-900/60"
                onClick={() => handleMatchClick(m.id)}
              >
                <div className="flex flex-col gap-2">
                  <TournamentEntry
                    team={m.team1}
                    goals={m.team1Goals}
                    date={m.end}
                  />
                  <TournamentEntry
                    team={m.team2}
                    goals={m.team2Goals}
                    date={m.end}
                  />
                </div>
              </div>
            ))}
          </div>
          <div id="round_quater_finals" className="flex flex-col gap-2">
            Semi final
            {tournament?.rounds[1]?.matches.map((m) => (
              <div
                key={m.id}
                className="flex grow cursor-pointer flex-col justify-center gap-4 rounded-lg p-3 backdrop-blur-sm transition-all duration-150 hover:bg-base-0/80 dark:hover:bg-base-900/60"
                onClick={() => handleMatchClick(m.id)}
              >
                <div className="flex flex-col gap-2">
                  <TournamentEntry
                    team={m.team1}
                    goals={m.team1Goals}
                    date={m.end}
                  />
                  <TournamentEntry
                    team={m.team2}
                    goals={m.team2Goals}
                    date={m.end}
                  />
                </div>
              </div>
            ))}
          </div>
          <div id="round_semi_finals" className="flex flex-col gap-2">
            Final
            {tournament?.rounds[2]?.matches.map((m) => (
              <div
                key={m.id}
                className="flex grow cursor-pointer flex-col justify-center gap-4 rounded-lg p-3 backdrop-blur-sm transition-all duration-150 hover:bg-base-0/80 dark:hover:bg-base-900/60"
                onClick={() => handleMatchClick(m.id)}
              >
                <div className="flex flex-col gap-2">
                  <TournamentEntry
                    team={m.team1}
                    goals={m.team1Goals}
                    date={m.end}
                  />
                  <TournamentEntry
                    team={m.team2}
                    goals={m.team2Goals}
                    date={m.end}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BracketTournament;
