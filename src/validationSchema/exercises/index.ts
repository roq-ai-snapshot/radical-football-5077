import * as yup from 'yup';

export const exerciseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  training_plan_id: yup.string().nullable().required(),
});
