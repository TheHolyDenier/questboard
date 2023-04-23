import { FormDataInterface } from '~/interfaces/form-data.interface';
import { api } from '~/plugins/di';
import { ElementDto } from '~/domain/elements/element.dto';

export const useElement = defineStore('element', () => {
  const needsRefresh = ref<number>(Date.now());
  const loading = ref(false);
  const elements = reactive<ElementDto[]>([]);
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

  const get = async (campaignId: string) => {
    loading.value = true;
    const data = await api.element.get(campaignId);
    elements.length = 0;
    elements.push(...data);
    loading.value = false;
  };

  const getOne = async (id: string) => {
    loading.value = true;
    selectedElement.value = await api.element.getOne(id);
    loading.value = false;
  };

  const update = async (id: string, body: FormDataInterface) => {
    loading.value = true;
    const element = await api.element.update(id, body);
    loading.value = false;
    refresh();
    return element;
  };

  const clearSelected = () => {
    selectedElement.value = null;
  };

  const clearList = () => {
    elements.length = 0;
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
    selectedElement,
    clearSelected,
    clearList
  };
});
