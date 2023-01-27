import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
  verse,
  text,
  t.translation_id,
  t.book
from ${config.table_name} t
inner join translations tr
  on tr.id = t.translation_id
inner join books b
  on b.id = t.book
inner join verses v on 
  t.book = v.book_id
  and t.chapter = v.chapter
  and t.verse = v.verse_number
where 
  ${filtersToWhereClause(filters)}
order by verse
;`;
