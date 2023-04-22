import { Element, User } from '@prisma/client';
import { prisma } from '~/server/api';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';

export class ElementsManager {
  static findOne = async (user: User, id: string) => {
    const data = await prisma.element.findFirstOrThrow({
      where: {
        id,
        OR: [
          { createdById: { equals: user.id } }
          // { players: { some: { id: user.id } } }
        ]
      }
    });

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data
    };
  };

  static findMany = async (
    user: User,
    campaignId: string
  ): Promise<Element[]> => {
    return prisma.element.findMany({
      where: {
        campaignId
      },
      orderBy: [{ isFavorite: 'asc' }, { name: 'asc' }]
    });
  };
}
