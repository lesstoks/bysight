import { Inject, Injectable } from '@nestjs/common';
import { OPERATIONS_REPOSITORY } from '../../../constants';
import { Operation } from '../../../domain/operation';

import type { IOperationsRepository } from '../../../domain/operation.repository';
import { CreateOperationRequestDto } from '../../../presenter/dto/create-operation-request.dto';

@Injectable()
export class CreateOperationUseCase {
  constructor(
    @Inject(OPERATIONS_REPOSITORY)
    private readonly repo: IOperationsRepository,
  ) {}

  async execute(createOperationDto: CreateOperationRequestDto): Promise<Operation> {
    const operation = new Operation(
      undefined,
      createOperationDto.name,
      createOperationDto.operationsCode
    );

    return await this.repo.create(operation);
  }
}
