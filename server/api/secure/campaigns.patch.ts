import { H3Event } from 'h3';
import { Campaign } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';
import { CampaignsManager } from '~/manager/campaigns.manager';
import { NotFoundError } from '~/errors/not-found.error';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Campaign | null>> => {
    const user = event.context.user;
    const query = getQuery(event);

    const body = await readBody(event);

    const campaign = await CampaignsManager.findOne(user, String(query.id));

    if (!campaign) return NotFoundError();

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data: await prisma.campaign.update({
        where: { id: String(query.id) },
        data: { ...body, updatedAt: new Date() }
      })
    };
  }
);
