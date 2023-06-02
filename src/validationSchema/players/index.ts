import * as yup from 'yup';
import { playerPerformanceValidationSchema } from 'validationSchema/player-performances';
import { playerTrainingPlanValidationSchema } from 'validationSchema/player-training-plans';

export const playerValidationSchema = yup.object().shape({
  position: yup.string(),
  birth_date: yup.date(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  player_performance: yup.array().of(playerPerformanceValidationSchema),
  player_training_plan: yup.array().of(playerTrainingPlanValidationSchema),
});
