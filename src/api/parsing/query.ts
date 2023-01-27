import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
  *
from ${config.table_name} p
where 
  ${filtersToWhereClause(filters)}
order by parsing_id
;`;
