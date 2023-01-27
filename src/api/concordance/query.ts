import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
  id,
  concordance_name,
  c.concordance_id,
  word,
  transliteration,
  definition,
  usage,
  origin,
  part_of_speech
from ${config.table_name} c
left join concordance_words cw
  on cw.concordance_id = c.id
where 
  ${filtersToWhereClause(filters)}
order by id
;`;
