import { H3Event } from 'h3';
import { Element } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';
import { NotFoundError } from '~/errors/not-found.error';
import { ElementsManager } from '~/manager/elements.manager';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Element | null>> => {
    const user = event.context.user;
    const query = getQuery(event);

    const body = await readBody(event);

    const element = await ElementsManager.findOne(user, String(query.id));

    if (!element) return NotFoundError();

    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data: await prisma.element.update({
        where: { id: String(query.id) },
        data: { ...body, updatedAt: new Date() }
      })
    };
  }
);
