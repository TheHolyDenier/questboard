import { H3Event } from 'h3';
import { Campaign } from '@prisma/client';
import { CampaignsManager } from '~/manager/campaigns.manager';
import { notFoundError } from '~/errors/not-found.error';
import { ApiMethodsEnum } from '~/enums/api-methods.enum';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';

export default defineEventHandler(async (event: H3Event) => {
  const id = getRouterParam(event, 'campaignId');
  if (!id) throw notFoundError();

  const campaign = await CampaignsManager.findOne(event.context.user, id);

  if (!campaign) throw notFoundError();

  switch (event.context.method) {
    case ApiMethodsEnum.DELETE:
      return deleteCampaign(campaign.id);
    case ApiMethodsEnum.PATCH:
      return patchCampaign(campaign.id, event);
    default:
      return getCampaign(campaign);
  }
});

const getCampaign = (campaign: Campaign) => {
  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: campaign
  };
};

const patchCampaign = async (campaignId: string, event: H3Event) => {
  const body = await readBody(event);

  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: await prisma.campaign.update({
      where: { id: campaignId },
      data: { ...body, updatedAt: new Date() }
    })
  };
};

const deleteCampaign = async (campaignId: string) => {
  await prisma.campaign.delete({ where: { id: campaignId } });

  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: null
  };
};
