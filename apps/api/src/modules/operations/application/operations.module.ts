import { Module } from '@nestjs/common';
import { OperationsController } from '../presenter/operations.controller';
import { CreateOperationUseCase } from './use-cases/create-operation/create-operation.use-case';
import { OperationRepository } from '../infrastructure/operation.repository';
import { OPERATION_REPOSITORY } from '../constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationEntity } from '../infrastructure/operation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OperationEntity])
  ],
  controllers: [OperationsController],
  providers: [
    // Repo
    {
      provide: OPERATION_REPOSITORY,
      useClass: OperationRepository
    },

    // Use cases
    CreateOperationUseCase,
  ],
})
export class OperationsModule {}
