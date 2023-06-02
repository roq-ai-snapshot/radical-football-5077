import { ExerciseInterface } from 'interfaces/exercise';
import { PlayerTrainingPlanInterface } from 'interfaces/player-training-plan';
import { CoachInterface } from 'interfaces/coach';

export interface TrainingPlanInterface {
  id?: string;
  name: string;
  description?: string;
  coach_id: string;
  created_at?: Date;
  updated_at?: Date;
  exercise?: ExerciseInterface[];
  player_training_plan?: PlayerTrainingPlanInterface[];
  coach?: CoachInterface;
  _count?: {
    exercise?: number;
    player_training_plan?: number;
  };
}
