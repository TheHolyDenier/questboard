import { DateTime } from 'luxon';
import { CampaignDto } from '~/domain/campaigns/campaign.dto';

const campaigns: CampaignDto[] = [
  {
    id: '1',
    title: 'The Quest for the Golden Apple',
    summary: 'A group of adventurers seeks to find the legendary Golden Apple',
    cover: 'https://example.com/golden-apple.jpg',
    isFavorite: true,
    createdById: '1',
    createdAt: DateTime.local().minus({ days: 5 }),
    updatedAt: DateTime.local().minus({ days: 2 }),
    userId: '1'
  },
  {
    id: '2',
    title: 'The Dungeon of Shadows',
    summary: 'A dark dungeon full of traps and monsters',
    cover: 'https://example.com/dungeon.jpg',
    isFavorite: false,
    createdById: '2',
    createdAt: DateTime.local().minus({ weeks: 2 }),
    updatedAt: DateTime.local().minus({ days: 1 }),
    userId: '2'
  }
];

export const useCampaign = defineStore('campaign', () => {
  return {
    campaigns
  };
});
