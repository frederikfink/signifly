export type Player = {
  id: number;
  name: string;
};

export type Team = {
  name: string;
  slug: string;
  player1: Player | null;
  player2: Player | null;
};

export type Match = {
  team1: Team;
  team2: Team;
  team1Goals: number;
  team2Goals: number;
  tournamentId: number;
  end?: Date;
};

export type Tournament = {
  name: string;
  slug: string;
  id: number;
  tournamentType: "bracket" | "allVsAll";
  teams: Team[];
  matches: Match[];
  winner: Team | null;
};

export type LeaderboardEntry = {
  team: Team;
  point: number;
  won: number;
  draw: number;
  lost: number;
  goals: number;
  goalsAgainst: number;
};
