import { Campaign } from '@prisma/client';
import { api } from '~/plugins/di';
import { FormDataInterface } from '~/interfaces/form-data.interface';

export const useCampaign = defineStore('campaign', () => {
  const needsRefresh = ref<number>(Date.now());
  const campaigns = ref<Campaign[]>([]);
  const selectedCampaign = ref<Campaign>();

  const refresh = () => (needsRefresh.value = Date.now());
  const create = async (body: FormDataInterface) => {
    const campaign = await api.campaign.create(body);
    refresh();
    return campaign;
  };

  const get = async () => {
    campaigns.value = await api.campaign.get();
  };

  const getOne = async (id: string) => {
    selectedCampaign.value = await api.campaign.getOne(id);
  };

  return {
    campaigns,
    selectedCampaign,
    create,
    get,
    getOne,
    refresh,
    needsRefresh
  };
});
