import { FormDataInterface } from '~/interfaces/form-data.interface';
import { api } from '~/plugins/di';
import { ElementDto } from '~/domain/elements/element.dto';
import { useCampaign } from '~/stores/campaign.store';

export const useElement = defineStore('element', () => {
  const needsRefresh = ref<number>(Date.now());
  const elements = ref<ElementDto[]>([]);
  const campaign = useCampaign();

  const refresh = () => (needsRefresh.value = Date.now());

  const create = async (campaignId: string, body: FormDataInterface) => {
    const campaign = await api.element.create(campaignId, {
      ...body,
      campaignId
    });
    refresh();
    return campaign;
  };

  const get = async () => {
    elements.value = campaign.selectedCampaignId
      ? await api.element.get(campaign.selectedCampaignId)
      : [];
  };

  return {
    needsRefresh,
    refresh,
    elements,
    create,
    get
  };
});
