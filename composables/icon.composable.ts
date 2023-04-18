import { flatten } from 'lodash';

export const useIcon = () => {
  const credits = [
    { author: 'Faithtoken', icons: ['card-discard'] },
    { author: 'Delapouite', icons: ['card-joker', 'wood-cabin'] }
  ];

  const icons = flatten(credits.map((credit) => credit.icons));

  return { credits, icons };
};
