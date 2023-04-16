import { Campaign } from '@prisma/client';
import { api } from '~/plugins/di';
import { FormDataInterface } from '~/interfaces/form-data.interface';

export const useCampaign = defineStore('campaign', () => {
  const needsRefresh = ref<number>(Date.now());
  const campaigns = ref<Campaign[]>([]);

  const refresh = () => (needsRefresh.value = Date.now());
  const create = async (body: FormDataInterface) => {
    const campaign = await api.campaign.create(body);
    refresh();
    return campaign;
  };

  const get = async () => {
    campaigns.value = await api.campaign.get();
  };

  return {
    campaigns,
    create,
    get,
    refresh,
    needsRefresh
  };
});
