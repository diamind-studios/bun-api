import { paramsToFilters } from '../../common/filters/paramsToFilters';
import { RequestFilters, Filters } from '../base/types';

const filters: RequestFilters = {
  translation_id: {
    name: '$translation_id',
    condition: 't.translation_id = $translation_id',
    required: true,
    type: 'int',
  },
  book_name: { name: '$book_name', condition: 'b.name = $book_name', required: true },
  chapter: { name: '$chapter', condition: 't.chapter = $chapter', required: true, type: 'int' },
  verse: { name: '$verse', condition: 't.verse = $verse' },
  include_apocrypha: { name: '$apocrypha', condition: 'v.apocryphal = $apocrypha', default: false },
} as const;

export const getFilters = (params: any): Filters => {
  return paramsToFilters(params, filters);
};
