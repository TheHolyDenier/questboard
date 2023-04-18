import { FormDataInterface } from '~/interfaces/form-data.interface';
import { api } from '~/plugins/di';

export const useElement = defineStore('element', () => {
  const needsRefresh = ref<number>(Date.now());

  const refresh = () => (needsRefresh.value = Date.now());

  const create = async (body: FormDataInterface) => {
    const campaign = await api.element.create(body);
    refresh();
    return campaign;
  };

  return {
    needsRefresh,
    refresh,
    create
  };
});
