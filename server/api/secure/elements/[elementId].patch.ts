import { defineEventHandler, getQuery, H3Event, readBody } from 'h3';
import { Element } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';
import { notFoundError } from '~/errors/not-found.error';
import { ElementsManager } from '~/manager/elements.manager';
import { CampaignsManager } from '~/manager/campaigns.manager';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Element>> => {
    await CampaignsManager.getParamAndFind(event);

    const query = getQuery(event);
    const element = await ElementsManager.findOne(String(query.id));
    if (!element) throw notFoundError();

    const body = await readBody(event);

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data: await prisma.element.update({
        where: { id: element.id },
        data: { ...body, updatedAt: new Date() }
      })
    };
  }
);
