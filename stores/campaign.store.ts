import { api } from '~/plugins/di';
import { FormDataInterface } from '~/interfaces/form-data.interface';
import { CampaignDto } from '~/domain/campaigns/campaign.dto';

export const useCampaign = defineStore('campaign', () => {
  const needsRefresh = ref<number>(Date.now());
  const campaigns = ref<CampaignDto[]>([]);
  const selectedCampaign = ref<CampaignDto>();

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

  const remove = async (id: string) => {
    await api.campaign.remove(id);
  };

  const update = async (id: string, body: FormDataInterface) => {
    const campaign = await api.campaign.update(id, body);
    refresh();
    return campaign;
  };

  return {
    campaigns,
    selectedCampaign,
    create,
    update,
    get,
    getOne,
    remove,
    refresh,
    needsRefresh
  };
});
