import { Body, Controller, Post } from '@nestjs/common';
import { CreateOperationRequestDto } from './dto/create-operation-request.dto';
import { CreateOperationUseCase } from '../application/use-cases/create-operation/create-operation.use-case';

@Controller('operations')
export class OperationsController {
  constructor(
    private readonly createOperationUseCase: CreateOperationUseCase,
  ) {}

  @Post()
  async createOperation(@Body() createOperationDto: CreateOperationRequestDto) {
    return await this.createOperationUseCase.execute(createOperationDto);
  }
}
