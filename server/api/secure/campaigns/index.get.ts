import { H3Event } from 'h3';
import { Campaign } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { CampaignsManager } from '~/manager/campaigns.manager';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Campaign>> => {
    const user = event.context.user;

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data: await CampaignsManager.findMany(user)
    };
  }
);
