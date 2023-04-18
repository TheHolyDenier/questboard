import { H3Event } from 'h3';
import { Element } from '@prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';
import { prisma } from '~/server/api';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<Element>> => {
    const user = event.context.user;
    const body = await readBody(event);

    const element = await prisma.element.create({
      data: {
        ...body,
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
  }
);
