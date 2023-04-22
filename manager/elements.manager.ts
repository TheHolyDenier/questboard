import { Element } from '@prisma/client';
import { prisma } from '~/server/api';

export class ElementsManager {
  static findOne = async (id: string) => {
    return prisma.element.findFirstOrThrow({
      where: {
        id
      }
    });
  };

  static findMany = async (campaignId: string): Promise<Element[]> => {
    return prisma.element.findMany({
      where: {
        campaignId
      },
      orderBy: [{ isFavorite: 'desc' }, { name: 'asc' }]
    });
  };
}
