import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from '../users/entities/users.entity';
import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';

const isProduction = process.env.NODE_ENV === 'production';

const entities = [
  User,
]

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // database
        dbName: configService.get<string>('BYS_DB_NAME'),
        host: configService.get<string>('BYS_DB_HOST'),
        port: configService.get<number>('BYS_DB_PORT'),
        user: configService.get<string>('BYS_DB_USER'),
        password: configService.get<string>('BYS_DB_PASSWORD'),
        driver: PostgreSqlDriver,

        // entities
        entities,

        // migrations
        migrations: {
          path: '../../../../../database/migrations',
          glob: '!(*.d).{js,ts}',
          allOrNothing: true,
          transactional: true,
          generator: TSMigrationGenerator,
        },

        // mikro-orm specific
        extensions: [Migrator],
        debug: !isProduction,
        timezone: 'UTC',
      }),
    })
  ]
})
export class DatabaseModule {}
