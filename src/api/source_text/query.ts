import { filtersToWhereClause } from '../../common/filters/filtersToWhereClause';
import { Filters } from '../base/types';
import { config } from './config';

export const queryBuilder = (filters: Filters) => `
select 
  verse,
  word,
  transliteration,
  word_number,
  words_id,
  parsing_id
from ${config.table_name} s
inner join sources sc
  on sc.source_id = s.source_id
inner join books b
  on b.id = s.book
inner join verses v on 
  s.book = v.book_id
  and s.chapter = v.chapter
  and s.verse = v.verse_number
where 
  ${filtersToWhereClause(filters)}
order by verse, word_number
;`;
