import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  parsing_id: { name: '$parsing_id', condition: 'p.parsing_id = $parsing_id', required: true, type: 'int' },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
