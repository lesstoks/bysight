import { Body, Controller, Post } from '@nestjs/common';
import { CreateOperationRequestDto } from '../application/dto/create-operation-request.dto';
import { CreateOperationCommand } from '../application/commands/create-operation.command';
import { CreateOperationUseCase } from '../application/use-cases/create-operation.use-case';

@Controller('operations')
export class OperationsController {
  constructor(
    private readonly createOperationUsecase: CreateOperationUseCase,
  ) {}

  @Post()
  async createOperation(@Body() createOperationDto: CreateOperationRequestDto) {
    const createOperationCommand = new CreateOperationCommand(
      createOperationDto.name,
      createOperationDto.operationsCode
    );

    return await this.createOperationUsecase.execute(createOperationCommand);
  }
}
