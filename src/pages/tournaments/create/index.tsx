import { FC, memo, useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import RootLayout from "~/components/layout";
import { Team } from "~/types/types";

const SelectStyle = ({
  onStyleSelect,
}: {
  onStyleSelect: (style: string) => void;
}) => {
  const handleNextStepClick = (style: string) => {
    onStyleSelect(style);
  };
  return (
    <>
      <button
        onClick={() => handleNextStepClick("bracket-tournament")}
        className="btn-card rounded-xl border p-6 text-left backdrop-blur dark:border-base-700 dark:bg-base-900/80"
      >
        <h3>Bracket-style tournament</h3>
        <p className="text-sm text-base-500">Simple knockout tournamnet</p>

        <p className="mt-5 text-base-500">4, 8 or 16 players supported</p>
      </button>
      <button
        onClick={() => handleNextStepClick("allvsall-tournament")}
        className="btn-card rounded-xl border p-6 text-left backdrop-blur dark:border-base-700 dark:bg-base-900/80"
      >
        <h3>All vs All tournament</h3>
        <p className="text-sm text-base-500">Every team plays every team</p>
        <p className="mt-5 text-base-500">4 - 16 players supported</p>
      </button>
    </>
  );
};

const ItemTypes = {
  Team: "team",
  SelectedTeam: "selected-team",
};

const Team = ({
  onDrop,
  team,
}: {
  onDrop: (team: Team) => void;
  team: Team;
}) => {
  const [{}, drag] = useDrag(() => ({
    type: ItemTypes.Team,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDrop(team);
      }
    },
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={drag}
      data-testid={`team`}
      className="w-full cursor-pointer rounded border border-base-700 bg-base-800 p-4 active:scale-[90%] active:border-dashed active:opacity-80"
    >
      <h5>{team.name}</h5>
      <p className="text-sm text-base-500">
        {team.player1?.name}, {team.player2?.name}
      </p>
    </div>
  );
};

export interface DustbinProps {
  accept: string[];
  onDrop: (item: any) => void;
  teams: Team[];
}

const TeamBin = ({
  accept,
  teams,
  bin,
  maxCounter = null,
  onDrop,
}: {
  onDrop: (bin: string, team: Team) => void;
  accept: string;
  bin: string;
  maxCounter: number | null;
  teams: Team[];
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: accept,
    drop: () => ondrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  return (
    <div
      className={`${
        isActive
          ? "border-dashed border-yellow-normal bg-yellow-light/10"
          : "border-base-700 bg-base-900/80"
      } w-96 rounded-xl border p-7`}
      ref={drop}
      data-testid="dustbin"
    >
      <div className="flex items-center justify-between">
        <h5>Teams</h5>
        {maxCounter !== null && (
          <h5 className="font-mono text-base-500">
            {teams.length} / {maxCounter}
          </h5>
        )}
      </div>
      <hr className="my-5 border border-base-700" />
      <div className="flex max-h-[700px] min-h-[700px] flex-col-reverse gap-2 overflow-y-auto">
        {teams.map((t) => (
          <Team key={t.slug} team={t} onDrop={() => onDrop(bin, t)} />
        ))}
      </div>
    </div>
  );
};

const SelectTeams = () => {
  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/teams`);
      const data = await result.json();

      setTeams(data);

      if (teams == undefined) {
        return;
      }
    }

    fetchData();
  }, []);

  const handleOnDrop = (bin: string, team: Team) => {
    setTeams((prevTeams) => prevTeams.filter((t) => t.slug !== team.slug));
    setSelectedTeams((prevTeams) =>
      prevTeams.filter((t) => t.slug !== team.slug)
    );

    if (bin == "teams") {
      setSelectedTeams((prevTeams) => [...prevTeams, team]);
    } else {
      setTeams((prevTeams) => [...prevTeams, team]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <TeamBin
        maxCounter={null}
        key={1}
        teams={teams}
        accept={ItemTypes.Team}
        bin={"teams"}
        onDrop={handleOnDrop}
      />
      <TeamBin
        maxCounter={16}
        key={2}
        teams={selectedTeams}
        accept={ItemTypes.Team}
        bin={"selectedTeams"}
        onDrop={handleOnDrop}
      />
    </div>
  );
};

const BracketTournament = ({
  onCancel,
  onNext,
}: {
  onCancel: () => void;
  onNext: () => void;
}) => {
  const handleCancel = () => {
    onCancel();
  };

  const handleSelectPlayers = () => {
    onNext();
  };
  return (
    <div className="w-96">
      <div className="rounded-xl border border-base-700 bg-base-900/80 p-7">
        <div className="mb-6">
          <label className="label">Tournament name</label>
          <input
            required
            type="text"
            name="tournament_name"
            placeholder="Give the tournament an awesome name"
            className="input"
          ></input>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center rounded border bg-base-800 pl-4 duration-150 active:scale-[95%] dark:border-base-700">
            <input
              id="4-teams-radio"
              className="h-4 w-4 focus:ring-yellow-normal"
              type="radio"
              value="4"
              name="tournament_size"
            />
            <label
              htmlFor="4-teams-radio"
              className="w-full cursor-pointer p-4 dark:text-base-0"
            >
              <p>4 Teams</p>
              <p className="text-sm text-base-500">8 Players</p>
            </label>
          </li>
          <li className="flex items-center rounded border bg-base-800 pl-4 transition-transform duration-150 active:scale-[95%] dark:border-base-700">
            <input
              id="8-teams-radio"
              className="h-4 w-4 focus:ring-yellow-normal"
              type="radio"
              value="4"
              name="tournament_size"
            />
            <label
              htmlFor="8-teams-radio"
              className="w-full cursor-pointer p-4 dark:text-base-0"
            >
              <p>8 Teams</p>
              <p className="text-sm text-base-500">16 Players</p>
            </label>
          </li>
          <li className="flex items-center rounded border bg-base-800 pl-4 duration-150 active:scale-[95%] dark:border-base-700">
            <input
              id="16-player-radio"
              className="h-4 w-4 focus:ring-yellow-normal"
              type="radio"
              value="4"
              name="tournament_size"
            />
            <label
              htmlFor="16-player-radio"
              className="w-full cursor-pointer p-4 dark:text-base-0"
            >
              <p>16 Teams</p>
              <p className="text-sm text-base-500">32 Players</p>
            </label>
          </li>
        </ul>
        <div className="mt-6 flex gap-4">
          <button
            className="btn border-base-700 dark:text-base-0"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="btn grow bg-green-bright"
            onClick={handleSelectPlayers}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const AllVsAllTournament = ({ onCancel }: { onCancel: () => void }) => {
  const handleCancel = () => {
    onCancel();
  };
  return (
    <>
      <button className="btn" onClick={handleCancel}>
        cancel
      </button>
      <p>all vs all</p>
    </>
  );
};

const createTournament = () => {
  const [tournamentStyle, setTournamentStyle] = useState<string | null>(null);
  const [selectPlayers, setSelectPlayers] = useState<boolean>(false);
  let content;

  const handleStyleSelect = (style: string) => {
    console.log("Hello");
    setTournamentStyle(style);
  };

  const handleCancel = () => {
    setTournamentStyle(null);
  };

  const handleSelectPlayers = () => {
    setSelectPlayers(true);
  };

  if (selectPlayers) {
    content = (
      <DndProvider backend={HTML5Backend}>
        <SelectTeams />
      </DndProvider>
    );
  } else {
    content = (
      <>
        {tournamentStyle === null && (
          <SelectStyle onStyleSelect={handleStyleSelect} />
        )}
        {tournamentStyle === "bracket-tournament" && (
          <BracketTournament
            onCancel={handleCancel}
            onNext={handleSelectPlayers}
          />
        )}
        {tournamentStyle === "allvsall-tournament" && (
          <AllVsAllTournament onCancel={handleCancel} />
        )}
      </>
    );
  }

  return (
    <RootLayout>
      <div className="flex h-full items-center justify-center gap-6">
        {content}
      </div>
    </RootLayout>
  );
};

export default createTournament;