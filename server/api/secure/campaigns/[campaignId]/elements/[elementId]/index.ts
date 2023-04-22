import { H3Event } from 'h3';
import { Element } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';
import { notFoundError } from '~/errors/not-found.error';
import { ElementsManager } from '~/manager/elements.manager';
import { CampaignsManager } from '~/manager/campaigns.manager';
import { ApiMethodsEnum } from '~/enums/api-methods.enum';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Element | null>> => {
    await CampaignsManager.getParamAndFind(event);

    const query = getQuery(event);
    const element = await ElementsManager.findOne(String(query.id));
    if (!element) throw notFoundError();

    switch (event.context.method) {
      case ApiMethodsEnum.PATCH:
        return updateElement(element.id, event);
      case ApiMethodsEnum.GET:
        return getElement(element);
      default:
        throw notFoundError();
    }
  }
);

const getElement = async (element: Element) => {
  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: element
  };
};

const updateElement = async (elementId: string, event: H3Event) => {
  const body = await readBody(event);

  return {
    statusCode: getStatusCode(StatusMessageEnum.OK),
    statusMessage: StatusMessageEnum.OK,
    data: await prisma.element.update({
      where: { id: elementId },
      data: { ...body, updatedAt: new Date() }
    })
  };
};
