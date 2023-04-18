import { User } from '@prisma/client';
import { prisma } from '~/server/api';

export class CampaignsManager {
  static findOne = async (user: User, id: string) => {
    return prisma.campaign.findFirstOrThrow({
      where: {
        id,
        OR: [
          { createdById: { equals: user.id } },
          { players: { some: { id: user.id } } }
        ]
      }
    });
  };

  static findMany = async (user: User) => {
    return prisma.campaign.findMany({
      where: {
        OR: [
          { createdById: { equals: user.id } },
          { players: { some: { id: user.id } } }
        ]
      },
      orderBy: [{ isFavorite: 'asc' }, { title: 'asc' }]
    });
  };
}
