import { AcademyInterface } from 'interfaces/academy';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  event_date: Date;
  location?: string;
  academy_id: string;
  created_at?: Date;
  updated_at?: Date;

  academy?: AcademyInterface;
  _count?: {};
}
