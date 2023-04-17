import { H3Event } from 'h3';
import { Campaign } from '@prisma/client';
import { CampaignsManager } from '~/manager/campaigns.manager';
import { ApiResponse } from '~/interfaces/api-response';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Campaign>> => {
    const user = event.context.user;
    const id = event.context.params!.id;

    return await CampaignsManager.findOne(user, String(id));
  }
);
