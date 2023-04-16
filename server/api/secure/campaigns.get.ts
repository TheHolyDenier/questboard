import { H3Event } from 'h3';
import { Campaign } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Campaign>> => {
    const user = event.context.user;

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
  }
);
