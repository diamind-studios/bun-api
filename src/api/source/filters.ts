import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  source_id: { name: '$source_id', condition: 's.source_id = $source_id', required: false, type: 'int' },
  name: { name: '$name', condition: 's.name = $name', required: false },
  language: { name: '$language', condition: 's.language = $language', required: false },
  complete: { name: '$complete', condition: 's.complete = $complete', required: false, type: 'int' },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
