import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
  id,
  name,
  full_name
from ${config.table_name} t
where 
  ${filtersToWhereClause(filters)}
order by id
;`;
