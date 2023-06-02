import { PlayerInterface } from 'interfaces/player';

export interface PlayerPerformanceInterface {
  id?: string;
  player_id: string;
  game_date: Date;
  goals?: number;
  assists?: number;
  minutes_played?: number;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  _count?: {};
}
