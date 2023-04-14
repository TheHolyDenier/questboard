import { DateTime } from 'luxon';
import { Campaign } from '@prisma/client';

const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'The Quest for the Golden Apple',
    summary: 'A group of adventurers seeks to find the legendary Golden Apple',
    cover: 'https://example.com/golden-apple.jpg',
    isFavorite: true,
    createdById: '1',
    createdAt: DateTime.local().minus({ days: 5 }).toJSDate(),
    updatedAt: DateTime.local().minus({ days: 2 }).toJSDate(),
    userId: '1'
  },
  {
    id: '2',
    title: 'The Dungeon of Shadows',
    summary: 'A dark dungeon full of traps and monsters',
    cover: 'https://example.com/dungeon.jpg',
    isFavorite: false,
    createdById: '2',
    createdAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    updatedAt: DateTime.local().minus({ days: 1 }).toJSDate(),
    userId: '2'
  }
];

export const useCampaign = defineStore('campaign', () => {
  return {
    campaigns
  };
});
