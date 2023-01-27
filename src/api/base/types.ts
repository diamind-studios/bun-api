export interface ApiResponse<T> {
  data: T | T[];
  success: boolean;
}
export interface ControllerConfig {
  path: string;
  table_name: string;
}

export type QueryParamValue = number | boolean | string | any[];
export type FilterTypes = 'int' | 'bool';

export interface RequestFilter {
  name: string;
  condition: string;
  required?: boolean;
  default?: QueryParamValue;
  type?: FilterTypes;
}
export interface RequestFilters {
  [name: string]: RequestFilter;
}
export interface Filters {
  [$name: string]: { value: any; condition: string };
}
export interface QueryParameters {
  [$name: string]: QueryParamValue;
}
