import { BagelResponse } from '@kakengloh/bagel';
import { Errorlike } from 'bun';

export const errorHandler = async (response: BagelResponse, error: Errorlike) => {
  console.error('error encountered:', error.message);
  return response.status(400).json({ error: error.message });
};
