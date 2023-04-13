const quests = [
  {
    id: '1',
    name: 'Retrieve the Artifact',
    description:
      'Recover the ancient artifact from the ruins of the lost city.',
    isCompleted: false,
    isFavorite: true
  },
  {
    id: '2',
    name: 'Rescue the Princess',
    description:
      'Find and rescue the princess from the clutches of the evil sorcerer.',
    isCompleted: false,
    isFavorite: false
  },
  {
    id: '3',
    name: 'Stop the Invasion',
    description: 'Prevent the invading army from overrunning the kingdom.',
    isCompleted: true,
    isFavorite: false
  }
];

export const useQuests = defineStore('quest', () => {
  return {
    quests
  };
});
