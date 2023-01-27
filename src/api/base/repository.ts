import { DatabaseConnection } from '../../database/database';
import { filtersToParameters } from '../../common/filters/filtersToParams';
import { Filters } from './types';

export class BaseRepository {
  connection: DatabaseConnection;
  buildQuery;

  constructor(connection: DatabaseConnection, queryBuilder: (filters: Filters) => string) {
    this.connection = connection;
    this.buildQuery = queryBuilder;
  }

  runQuery(filters: Filters) {
    const parameters = filtersToParameters(filters);
    const query = this.buildQuery(filters);
    console.log('querying...', query, parameters);
    return this.connection.query(query, parameters);
  }
}
