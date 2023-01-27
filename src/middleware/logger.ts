import { BagelRequest, BagelResponse } from '@kakengloh/bagel';

export const loggerMiddleware = async (request: BagelRequest, response: BagelResponse, next: any) => {
  console.log(`${request.method} ${request.path}`);
  console.log('Body:', request.body);
  console.log('Params:', request.query);
  next();
};
