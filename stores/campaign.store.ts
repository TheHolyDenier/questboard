import { api } from '~/plugins/di';
import { FormDataInterface } from '~/interfaces/form-data.interface';

export const useCampaign = defineStore('campaign', () => {
  const needsRefresh = ref(Date.now());

  const refresh = () => (needsRefresh.value = Date.now());
  const create = async (body: FormDataInterface) => {
    const campaign = await api.campaign.create(body);
    refresh();
    return campaign;
  };

  const get = async () => {
    return await api.campaign.get();
  };

  return {
    create,
    get,
    refresh,
    needsRefresh
  };
});
