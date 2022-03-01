import { Player } from "./player.model";
import { Team } from "./team.model";

export type Card = {
  id: string;
  cardName: string;
  cardNumber: string;
  year: number;
  rookie: boolean;
  autographed: boolean;
  relic: boolean;
  serial: string;
  serialOutOf: string;
  variation: string;
  notes: string;
  graded: boolean;
  grade: number;
  team: Team;
  player: Player;
};
