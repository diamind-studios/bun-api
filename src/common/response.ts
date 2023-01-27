import { BagelResponse } from '@kakengloh/bagel';
import { ApiResponse } from '../api/base/types';

const buildResponse = (data: any) => {
  const responsePayload: ApiResponse<any> = {
    success: true,
    data: data,
  };
  return responsePayload;
};

export const sendResponse = (response: BagelResponse, data: any) => {
  const responsePayload = buildResponse(data);
  response.json(responsePayload);
  response.done();
};
