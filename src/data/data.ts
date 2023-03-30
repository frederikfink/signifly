import {
  BracketTournament,
  Match,
  Player,
  Team,
  TournamentRound,
} from "~/types/types";

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
    let player2 = players[15 - i];

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
const shuffledTeams = selectedTeams.sort((a, b) => 0.5 - Math.random());

const today = new Date();
const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

export const firstRoundMatches: Match[] = selectedTeams.map((team, i) => {
  const team2Goals = 10;
  const team1Goals = Math.min(Math.floor(Math.random() * 11), 9);
  const winner = Math.round(Math.random()); // Randomly pick 0 or 1
  const otherTeam = teams[(i + 1) % 4];
  const matchDate = new Date(
    lastWeek.getTime() + Math.random() * (today.getTime() - lastWeek.getTime())
  );
  return {
    id: i,
    team1: winner === 0 ? team : otherTeam,
    team2: winner === 1 ? team : otherTeam,
    team1Goals: winner === 0 ? team1Goals : team2Goals,
    team2Goals: winner === 1 ? team1Goals : team2Goals,
    tournamentId: 1,
    end: matchDate,
  } as Match;
});

const firstRoundWinners = firstRoundMatches.filter((match) =>
  match.team1Goals === 10 ? match.team1 : match.team2
);

export const secondRoundMatches: Match[] = [
  {
    id: 100,
    team1: firstRoundWinners[0]?.team1,
    team2: firstRoundWinners[1]?.team2,
    team1Goals: 10,
    team2Goals: 1,
  } as Match,
  {
    id: 8199,
    team1: firstRoundWinners[2]?.team1,
    team2: firstRoundWinners[3]?.team2,
    team1Goals: 0,
    team2Goals: 10,
  } as Match,
];

const secondRoundWinners = secondRoundMatches.filter((match) =>
  match.team1Goals === 10 ? match.team1 : match.team2
);

export const thirdRoundMatches: Match[] = [
  {
    id: 283,
    team1: secondRoundWinners[0]?.team1,
    team2: secondRoundWinners[1]?.team2,
    team1Goals: 8,
    team2Goals: 1,
  } as Match,
];

export const tournaments: BracketTournament[] = [
  {
    id: 1,
    name: "Galactic Showdown (16 player bracket tournament)",
    slug: `tournament-${"Galactic Showdown".toLowerCase().replace(/ /g, "-")}`,
    tournamentType: "bracket",
    teams: teams,
    rounds: [
      {
        tournamentId: 1,
        matches: firstRoundMatches,
      } as TournamentRound,
      {
        tournamentId: 2,
        matches: secondRoundMatches,
      } as TournamentRound,
      {
        tournamentId: 3,
        matches: thirdRoundMatches,
      } as TournamentRound,
    ],
    winner: null,
  } as BracketTournament,
];
