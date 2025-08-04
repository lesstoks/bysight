import { Inject, Injectable } from '@nestjs/common';
import { OPERATIONS_REPOSITORY } from '../../constants';
import { CreateOperationCommand } from '../commands/create-operation.command';
import { Operation } from '../../domain/operation';

import type { IOperationsRepository } from '../../domain/operation.repository';

@Injectable()
export class CreateOperationUsecase {
  constructor(
    @Inject(OPERATIONS_REPOSITORY)
    private readonly repo: IOperationsRepository,
  ) {}

  async execute(createOperationCommand: CreateOperationCommand): Promise<Operation> {
    const operation = new Operation(
      createOperationCommand.name,
      createOperationCommand.operationsCode,
    )

    const savedRecord = await this.repo.create(operation);

    return savedRecord.toDomain();
  }
}
