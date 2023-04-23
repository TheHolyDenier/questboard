import { NavigationInterface } from '~/interfaces/navigation.interface';

export const useBreadcrumb = defineStore('breadcrumb', () => {
  const navigation: NavigationInterface[] = reactive([
    {
      name: '/',
      icon: 'wood-cabin'
    },
    {
      name: 'campaigns-campaignId',
      paramProperty: 'campaignId'
    },
    {
      name: 'campaigns-campaignId-elements-elementId',
      paramProperty: 'elementId'
    }
  ]);

  const update = (key: string, id?: string, label?: string) => {
    const index = navigation.findIndex((path) => path.paramProperty === key);
    if (index === -1) return;

    navigation[index].id = id;
    navigation[index].label = label;
  };

  return { navigation, update };
});
