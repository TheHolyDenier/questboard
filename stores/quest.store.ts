import { DateTime } from 'luxon';
import { Quest } from '.prisma/client';

const quests: Quest[] = [
  {
    id: '1',
    title: 'Retrieve stolen treasure',
    description:
      "The local thieves' guild has stolen a valuable artifact. Retrieve it and return it to its rightful owner.",
    createdAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    updatedAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    cover: null,
    isFavorite: false,
    isCompleted: false,
    createdById: '1'
  },
  {
    id: '2',
    title: 'Clear out goblin den',
    description:
      'Goblins have infested an old mine, causing trouble for nearby villages. Clear them out and restore peace to the area.',
    createdAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    updatedAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    cover: null,
    isFavorite: false,
    isCompleted: false,
    createdById: '1'
  },
  {
    id: '3',
    title: 'Deliver important message',
    description:
      'A message of great importance needs to be delivered to a distant city. Deliver it safely and promptly.',
    createdAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    updatedAt: DateTime.local().minus({ weeks: 2 }).toJSDate(),
    cover: null,
    isFavorite: false,
    isCompleted: false,
    createdById: '1'
  }
];

export const useQuests = defineStore('quest', () => {
  return {
    quests
  };
});
