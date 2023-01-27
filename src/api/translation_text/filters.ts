import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  book_name: { name: '$book_name', condition: 'b.name = $book_name', required: true },
  chapter: { name: '$chapter', condition: 't.chapter = $chapter', required: true, type: 'int' },
  verse: { name: '$verse', condition: 't.verse = $verse' },
  translation: { name: '$translation', condition: 'tr.name = $translation' },
  include_apocrypha: { name: '$apocrypha', condition: 'v.apocryphal = $apocrypha', default: false },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
