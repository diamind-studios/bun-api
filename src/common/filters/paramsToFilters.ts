import { Filters, FilterTypes, QueryParamValue, RequestFilter, RequestFilters } from '../../api/base/types';

const verifyRequired = (name: string, params: any, required?: boolean) => {
  if (required && !(name in params)) throw Error(`Missing required filter: ${name}`);
};

const parsers = {
  int: parseInt,
  bool: (val: any) => val == 'true',
};
const parseValue = (value: string, type: FilterTypes | undefined) => {
  if (type && type in parsers) return parsers[type](value);
  return value;
};

const setFilter = (name: string, filter: RequestFilter, value: string | undefined) => {
  const parsedValue = value ? parseValue(value, filter.type) : filter.default;
  return { value: parsedValue, condition: filter.condition };
};

export const paramsToFilters = (params: any, filters: RequestFilters): Filters => {
  const newFilters: Filters = {};
  for (const name of Object.keys(filters)) {
    const filter = filters[name];
    verifyRequired(name, params, filter.required);
    if (name in params || filter.default) newFilters[filter.name] = setFilter(name, filter, params[name]);
  }
  return newFilters;
};
