import { H3Event } from 'h3';
import { Campaign } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { CampaignsManager } from '~/manager/campaigns.manager';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Campaign>> => {
    const user = event.context.user;
    const query = getQuery(event);

    if (query && query.id) {
      return await CampaignsManager.findOne(user, String(query.id));
    } else {
      return await CampaignsManager.findMany(user);
    }
  }
);
