import { useDrop } from "react-dnd";
import type { Team as TTeam } from "~/types/types";
import Team from "./Team";

interface TeamBinProps {
  onDrop: (bin: string, team: TTeam) => void;
  accept: string;
  bin: string;
  maxCounter?: number | null;
  teams: TTeam[];
}

const TeamBin = ({
  accept,
  teams,
  bin,
  maxCounter = null,
  onDrop,
}: TeamBinProps) => {
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
          ? "border-dashed border-yellow-normal bg-yellow-light/50 dark:bg-yellow-light/10"
          : "border-base-300 bg-base-0/80 dark:border-base-700 dark:bg-base-900/80"
      } w-96 rounded-xl border p-7`}
      ref={drop}
      data-testid="dustbin"
    >
      <div className="flex items-center justify-between">
        <h5>Teams</h5>
        {maxCounter !== null && (
          <h5
            className={`${
              maxCounter === teams.length
                ? "text-green-bright"
                : "text-base-500"
            } font-mono`}
          >
            {teams.length} / {maxCounter}
          </h5>
        )}
      </div>
      <hr className="my-5 border border-base-300 dark:border-base-700" />
      <div className="flex max-h-[700px] min-h-[700px] flex-col-reverse gap-2 overflow-y-auto">
        {teams.map((t) => (
          <Team key={t.slug} team={t} onDrop={() => onDrop(bin, t)} />
        ))}
      </div>
    </div>
  );
};

export default TeamBin;
