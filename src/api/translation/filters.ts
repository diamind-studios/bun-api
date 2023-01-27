import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  id: { name: '$id', condition: 't.id = $id', required: false },
  name: { name: '$name', condition: 't.name = $name', required: false },
  language: { name: '$language', condition: 't.language = $language', required: false },
  complete: { name: '$complete', condition: 't.complete = $complete', required: false, type: 'int' },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
