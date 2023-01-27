import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
SELECT 
  v.*, 
  b.name as book_name
from ${config.table_name} v
left join books b
on b.id = v.book_id
where 
  ${filtersToWhereClause(filters)}
order by b.id, v.id
;`;
