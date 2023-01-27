import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  book_name: { name: '$book_name', condition: 'b.name = $book_name', required: false },
  ['book_name.like']: { name: '$book_name', condition: "LOWER(b.name) like LOWER($book_name) || '%'", required: false },
  chapter: { name: '$chapter', condition: 'v.chapter = $chapter', required: false, type: 'int' },
  verse: { name: '$verse', condition: 'v.verse_number = $verse', required: false, type: 'int' },
  include_apocrypha: { name: '$apocrypha', condition: 'v.apocryphal = $apocrypha', default: false },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
