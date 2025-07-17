import dbConfig, { DbConfig } from './db-config';
import appConfig, { AppConfig } from './app-config';

interface Config extends AppConfig {
  database: DbConfig,
}

export default (): Config => ({
  database: dbConfig(),
  ...appConfig(),
});
