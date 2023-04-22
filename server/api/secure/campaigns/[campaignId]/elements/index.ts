import { H3Event } from 'h3';
import { Element } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';
import { CampaignsManager } from '~/manager/campaigns.manager';
import { ApiMethodsEnum } from '~/enums/api-methods.enum';
import { notFoundError } from '~/errors/not-found.error';
import { ElementsManager } from '~/manager/elements.manager';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Element>> => {
    const campaign = await CampaignsManager.getParamAndFind(event);

    switch (event.context.method) {
      case ApiMethodsEnum.POST:
        return postElement(campaign.id, event);
      case ApiMethodsEnum.GET:
        return getElements(campaign.id);
      default:
        throw notFoundError();
    }
  }
);

const postElement = async (campaignId: string, event: H3Event) => {
  const user = event.context.user;
  const body = await readBody(event);

  const element = await prisma.element.create({
    data: {
      ...body,
      campaignId,
      createdById: user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });

  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: element
  };
};

const getElements = async (
  campaignId: string
): Promise<ApiResponse<Element>> => {
  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: await ElementsManager.findMany(campaignId)
  };
};
