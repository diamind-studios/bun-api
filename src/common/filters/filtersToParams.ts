import { Filters, QueryParameters } from '../../api/base/types';

export const filtersToParameters = (filters: Filters): QueryParameters => {
  const parameters: QueryParameters = {};
  for (const name of Object.keys(filters)) {
    parameters[name] = filters[name].value;
  }
  return parameters;
};
