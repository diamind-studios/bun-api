import { BagelRequest, BagelResponse } from '@kakengloh/bagel';

export function parseRequest(request: BagelRequest, response: BagelResponse, next: any) {
  next();
}
