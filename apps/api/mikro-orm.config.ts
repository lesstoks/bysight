import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';

export default defineConfig({
  entities: [],
  driver: PostgreSqlDriver,

  timezone: 'UTC',
});
