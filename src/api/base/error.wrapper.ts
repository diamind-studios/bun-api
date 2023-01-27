import { BagelRequest, BagelResponse } from '@kakengloh/bagel';
import { errorHandler } from '../../common/error.handler';

export const errorHandlerWrapper = (handler: any) => {
  return async (request: BagelRequest, response: BagelResponse, next: any) => {
    try {
      await handler(request, response, next);
    } catch (error: any) {
      errorHandler(response, error);
      throw error;
    }
  };
};
