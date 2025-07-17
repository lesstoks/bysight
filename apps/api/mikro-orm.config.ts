import { defineConfig } from '@mikro-orm/core';
import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
import { User } from './src/modules/users/entities/users.entity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // database
  driver: PostgreSqlDriver,

  // entities
  entities: [
    User,
  ],

  // migrations
  migrations: {
    path: '../../database/migrations',
    glob: '!(*.d).{js,ts}',
    allOrNothing: true,
    transactional: true,
    generator: TSMigrationGenerator,
  },

  // mikro-orm specific
  extensions: [Migrator],
  debug: !isProduction,
  timezone: 'UTC',
});
