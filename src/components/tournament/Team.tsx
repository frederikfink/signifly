import { useDrag } from "react-dnd";
import type { Team as TTeam } from "~/types/types";

interface TeamProps {
  onDrop: (team: TTeam) => void;
  team: TTeam;
}

export const ItemTypes = {
  Team: "team",
  SelectedTeam: "selected-team",
};

const Team = ({ onDrop, team }: TeamProps) => {
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
      className="w-full cursor-pointer rounded border border-base-300 bg-base-50 p-4 active:scale-[90%] active:border-dashed active:opacity-80 dark:border-base-700 dark:bg-base-800"
    >
      <h5>{team.name}</h5>
      <p className="text-sm text-base-500">
        {team.player1?.name}, {team.player2?.name}
      </p>
    </div>
  );
};

export default Team;
