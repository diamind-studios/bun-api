import { Database } from 'bun:sqlite';
import { DATABASE } from '../common/constants';

export class DatabaseConnection {
  private database = new Database(DATABASE, { readonly: true });

  constructor() {}

  query(query: string, params?: any) {
    const result = this.database.query(query);
    return result.all(params);
  }
}
