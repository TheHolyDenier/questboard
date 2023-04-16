import { User } from '@prisma/client';
import { prisma } from '~/server/api';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';

export class CampaignsManager {
  static findOne = async (user: User, id: string) => {
    const data = await prisma.campaign.findFirstOrThrow({
      where: {
        id,
        OR: [
          { createdById: { equals: user.id } },
          { players: { some: { id: user.id } } }
        ]
      }
    });

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data
    };
  };

  static findMany = async (user: User) => {
    const data = await prisma.campaign.findMany({
      where: {
        OR: [
          { createdById: { equals: user.id } },
          { players: { some: { id: user.id } } }
        ]
      },
      orderBy: [{ isFavorite: 'asc' }, { title: 'asc' }]
    });

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data
    };
  };
}
