import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  event_date: yup.date().required(),
  location: yup.string(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  academy_id: yup.string().nullable().required(),
});
