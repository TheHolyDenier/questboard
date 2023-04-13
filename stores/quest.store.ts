import { QuestDto } from '~/domain/quests/quest.dto';

const quests: QuestDto[] = [
  {
    id: 1,
    title: 'Retrieve stolen treasure',
    description:
      "The local thieves' guild has stolen a valuable artifact. Retrieve it and return it to its rightful owner.",
    difficulty: 'Hard',
    reward: 1000,
    createdAt: new Date('2022-04-20T12:34:56Z'),
    updatedAt: new Date('2022-04-22T10:11:12Z')
  },
  {
    id: 2,
    title: 'Clear out goblin den',
    description:
      'Goblins have infested an old mine, causing trouble for nearby villages. Clear them out and restore peace to the area.',
    difficulty: 'Medium',
    reward: 500,
    createdAt: new Date('2022-04-18T09:00:00Z'),
    updatedAt: new Date('2022-04-19T15:23:45Z')
  },
  {
    id: 3,
    title: 'Deliver important message',
    description:
      'A message of great importance needs to be delivered to a distant city. Deliver it safely and promptly.',
    difficulty: 'Easy',
    reward: 250,
    createdAt: new Date('2022-04-15T14:30:00Z'),
    updatedAt: new Date('2022-04-16T08:45:00Z')
  }
];

export const useQuests = defineStore('quest', () => {
  return {
    quests
  };
});
