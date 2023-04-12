import { defineEventHandler, H3Event } from 'h3';
import { User } from '.prisma/client';
import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';

export default defineEventHandler(
  async (event: H3Event): Promise<ApiResponse<User>> => {
    return {
      statusCode: getStatusCode(StatusMessageEnum.OK),
      statusMessage: StatusMessageEnum.OK,
      data: event.context.user
    };
  }
);
