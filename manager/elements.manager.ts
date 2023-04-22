import { Element, User } from '@prisma/client';
import { prisma } from '~/server/api';

export class ElementsManager {
  static findOne = async (user: User, id: string) => {
    return prisma.element.findFirstOrThrow({
      where: {
        id,
        campaign: {
          OR: [
            { createdById: { equals: user.id } },
            { players: { some: { id: user.id } } }
          ]
        }
      },
      include: {
        campaign: true
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
