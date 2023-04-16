import { H3Event } from 'h3';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';
import { CampaignsManager } from '~/manager/campaigns.manager';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<null>> => {
    const user = event.context.user;
    const query = getQuery(event);

    if (query && query.id) {
      const campaign = await CampaignsManager.findOne(user, String(query.id));
      if (campaign) {
        prisma.campaign.delete({ where: { id: String(query.id) } });
      }
    }

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data: null
    };
  }
);
