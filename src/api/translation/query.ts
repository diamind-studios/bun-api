import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
translation_id,
  name,
  full_name
from ${config.table_name} t
where 
  ${filtersToWhereClause(filters)}
order by translation_id
;`;
