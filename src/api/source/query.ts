import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
  id,
  name,
  full_name,
  "language"
from ${config.table_name} s
where 
  ${filtersToWhereClause(filters)}
order by id
;`;
