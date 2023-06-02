import * as yup from 'yup';

export const playerPerformanceValidationSchema = yup.object().shape({
  game_date: yup.date().required(),
  goals: yup.number().integer(),
  assists: yup.number().integer(),
  minutes_played: yup.number().integer(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  player_id: yup.string().nullable().required(),
});
