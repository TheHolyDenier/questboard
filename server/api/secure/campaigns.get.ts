import { H3Event } from 'h3';
import { Campaign, User } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Campaign>> => {
    const user = event.context.user;
    const query = getQuery(event);

    if (query && query.id) {
      return await _findOne(user, String(query.id));
    } else {
      return await _findMany(user);
    }
  }
);

const _findOne = async (user: User, id: string) => {
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

const _findMany = async (user: User) => {
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
