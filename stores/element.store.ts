import { storeToRefs } from 'pinia';
import { FormDataInterface } from '~/interfaces/form-data.interface';
import { api } from '~/plugins/di';
import { ElementDto } from '~/domain/elements/element.dto';
import { useCampaign } from '~/stores/campaign.store';

export const useElement = defineStore('element', () => {
  const needsRefresh = ref<number>(Date.now());
  const loading = ref(false);
  const elements = ref<ElementDto[]>([]);
  const { selectedCampaignId } = storeToRefs(useCampaign());
  const selectedElement = ref<ElementDto | null>();
  const refresh = () => (needsRefresh.value = Date.now());

  const create = async (campaignId: string, body: FormDataInterface) => {
    loading.value = true;
    const element = await api.element.create(campaignId, {
      ...body,
      campaignId
    });
    loading.value = false;
    refresh();
    return element;
  };

  const get = async () => {
    loading.value = true;
    elements.value = selectedCampaignId.value
      ? await api.element.get(selectedCampaignId.value)
      : [];
    loading.value = false;
  };

  const getOne = async (id: string) => {
    loading.value = true;
    selectedElement.value = selectedCampaignId.value
      ? await api.element.getOne(selectedCampaignId.value, id)
      : null;
    loading.value = false;
  };

  const update = async (id: string, body: FormDataInterface) => {
    loading.value = true;
    const element = selectedCampaignId.value
      ? await api.element.update(selectedCampaignId.value, id, body)
      : null;
    loading.value = false;
    refresh();
    return element;
  };

  return {
    needsRefresh,
    refresh,
    elements,
    create,
    getOne,
    update,
    loading,
    get,
    selectedElement
  };
});
