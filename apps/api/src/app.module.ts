import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './app/config';
import { UsersModule } from './modules/users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from '../mikro-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MikroOrmModule.forRoot(mikroOrmConfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
