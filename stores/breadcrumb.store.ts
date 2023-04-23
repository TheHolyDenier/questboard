import { RouteLocationRaw } from 'vue-router';
import { NavigationInterface } from '~/interfaces/navigation.interface';
import { useCampaign } from '~/stores/campaign.store';
import { useElement } from '~/stores/element.store';

export const useBreadcrumb = defineStore('breadcrumb', () => {
  const $campaign = useCampaign();
  const $element = useElement();

  const navigation = computed<NavigationInterface[]>(() => [
    {
      name: 'index',
      icon: 'wood-cabin',
      getTo: () => ({ name: 'index' })
    },
    {
      name: 'campaigns-campaignId',
      label:
        $campaign.selectedCampaign?.title ||
        $element.selectedElement?.campaign?.title,
      getTo:
        $campaign.selectedCampaign || $element.selectedElement
          ? (): RouteLocationRaw => ({
              name: 'campaigns-campaignId',
              params: {
                campaignId:
                  $campaign.selectedCampaign?.id ||
                  $element.selectedElement?.campaignId
              }
            })
          : undefined
    },
    {
      name: 'campaigns-campaignId-elements-elementId',
      label: $element.selectedElement?.name,
      getTo: $element.selectedElement
        ? (): RouteLocationRaw => ({
            name: 'campaigns-campaignId-elements-elementId',
            params: {
              campaignId: $element.selectedElement!.campaignId,
              elementId: $element.selectedElement!.name
            }
          })
        : undefined
    }
  ]);

  return { navigation };
});
