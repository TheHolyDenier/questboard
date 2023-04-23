import { IconType } from '~/types/icon.type';

export interface NavigationInterface {
  name: string;
  id?: string;
  label?: string;
  icon?: IconType;
  paramProperty?: string;
}
