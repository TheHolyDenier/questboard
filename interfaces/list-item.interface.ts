import { RouteLocationRaw } from 'vue-router';

export interface ListItemInterface {
  name: string;
  title: string;
  subtitle?: string;
  to?: RouteLocationRaw;
}
