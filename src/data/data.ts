import { Match, Player, Team, Tournament } from "~/types/types";

export const players: Player[] = [
  { id: 1, name: "Luke Skywalker" },
  { id: 2, name: "Leia Organa" },
  { id: 3, name: "Han Solo" },
  { id: 4, name: "Chewbacca" },
  { id: 5, name: "Obi-Wan Kenobi" },
  { id: 6, name: "Yoda" },
  { id: 7, name: "Darth Vader" },
  { id: 8, name: "Emperor Palpatine" },
  { id: 9, name: "Boba Fett" },
  { id: 10, name: "Jabba the Hutt" },
  { id: 11, name: "R2-D2" },
  { id: 12, name: "C-3PO" },
  { id: 13, name: "Lando Calrissian" },
  { id: 14, name: "Padmé Amidala" },
  { id: 15, name: "Mace Windu" },
  { id: 16, name: "Qui-Gon Jinn" },
];

const teamNames = [
  "Rebel Alliance",
  "Galactic Empire",
  "Jedi Order",
  "Sith Lords",
  "Bounty Hunters",
  "Smugglers",
  "Podracers",
  "Ewok Tribe",
];

export const teams: Team[] = teamNames
  .map((name, i) => {
    let player1 = players[i];
    let player2 = players[i + 1 * 2];

    if (player1 !== undefined || player2 !== undefined) {
      return {
        name: name,
        slug: `team-${name.toLowerCase().replace(/ /g, "-")}`,
        player1: player1,
        player2: player2,
      } as Team;
    }
  })
  .filter((team) => team !== undefined) as Team[];

const selectedTeams = teams.slice(0, 4);

const tournamentName = "Galactic Showdown";

export const tournaments: Tournament[] = [
  {
    id: 1,
    name: tournamentName,
    slug: `tournament-${tournamentName.toLowerCase().replace(/ /g, "-")}`,
    tournamentType: "bracket",
    teams: teams,
    matches: selectedTeams.map((team, i) => {
      const otherTeam = selectedTeams[(i + 1) % 4];
      return {
        team1: team,
        team2: otherTeam,
        team1Goals: 0,
        team2Goals: 0,
        tournamentId: 1,
      } as Match;
    }),
    winner: null,
  } as Tournament,
];
