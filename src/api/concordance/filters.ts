import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  words_id: { name: '$id', condition: 'cw.words_id = $id', required: true, type: 'int' },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
