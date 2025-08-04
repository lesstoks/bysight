import { Module } from '@nestjs/common';
import { OperationsController } from './presenter/operations.controller';
import { CreateOperationUseCase } from './application/use-cases/create-operation.use-case';
import { OperationsRepository } from './infrastructure/operations.repository';
import { OPERATIONS_REPOSITORY } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationEntity } from './infrastructure/operation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OperationEntity])
  ],
  controllers: [OperationsController],
  providers: [
    // Repo
    {
      provide: OPERATIONS_REPOSITORY,
      useClass: OperationsRepository
    },

    // Use cases
    CreateOperationUseCase,
  ],
})
export class OperationsModule {}
