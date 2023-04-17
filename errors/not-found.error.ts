import { ApiResponse } from '~/interfaces/api-response';
import { getStatusCode, StatusMessageEnum } from '~/enums/status-message.enum';

export const NotFoundError = (): ApiResponse<null> => {
  return {
    statusCode: getStatusCode(StatusMessageEnum.NOT_FOUND),
    statusMessage: StatusMessageEnum.NOT_FOUND,
    data: null
  };
};
