import { category } from './category';
import { impact_area } from './impact_area';
import { service_area } from './service_area';

export type Listing = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  url: string;
  img: string;
  bio: string;
  categories: Array<category>;
  impact_areas: Array<impact_area>;
  service_areas: Array<service_area>;
};
