import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/users.entity';

@Module({
  imports: [MikroOrmModule.forFeature([User])]
})
export class UsersModule {}
