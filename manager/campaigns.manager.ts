import { Campaign, User } from '@prisma/client';
import { H3Event } from 'h3';
import { prisma } from '~/server/api';
import { notFoundError } from '~/errors/not-found.error';

export class CampaignsManager {
  static getParamAndFind = async (event: H3Event): Promise<Campaign> => {
    const id = getRouterParam(event, 'campaignId');
    if (!id) throw notFoundError();

    const campaign = await CampaignsManager.findOne(event.context.user, id);

    if (!campaign) throw notFoundError();

    return campaign;
  };

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
      orderBy: [{ isFavorite: 'desc' }, { title: 'asc' }]
    });
  };
}
