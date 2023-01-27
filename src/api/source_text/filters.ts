import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  book_name: { name: '$book_name', condition: 'b.name = $book_name', required: true },
  chapter: { name: '$chapter', condition: 's.chapter = $chapter', required: true, type: 'int' },
  verse: { name: '$verse', condition: 's.verse = $verse' },
  source: { name: '$source', condition: 'sc.name = $source', required: true },
  include_apocrypha: { name: '$apocrypha', condition: 'v.apocryphal = $apocrypha', default: false },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
