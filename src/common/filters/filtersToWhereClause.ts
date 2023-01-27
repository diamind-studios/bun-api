import { Filters } from '../../api/base/types';

export const filtersToWhereClause = (filters: Filters): string => {
  const whereConditions = Object.keys(filters).map((key: string) => filters[key].condition);
  return whereConditions.join('\n and ') || 'true';
};
