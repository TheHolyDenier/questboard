import { RouteLocationRaw } from 'vue-router';
import { IconType } from '~/types/icon.type';

export class Navigation {
  name: string;
  id?: string;
  label?: string;
  icon?: IconType;
  paramProperty?: string;

  get to(): RouteLocationRaw {
    const to: RouteLocationRaw = { name: this.name };

    if (this.paramProperty && this.id) {
      to.params = { [this.paramProperty]: this.id };
    }

    return to;
  }
}
