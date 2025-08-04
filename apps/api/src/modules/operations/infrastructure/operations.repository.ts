import { IOperationsRepository } from '../domain/operation.repository';
import { OperationEntity } from './operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Operation } from '../domain/operation';

@Injectable()
export class OperationsRepository implements IOperationsRepository {
  constructor(
    @InjectRepository(OperationEntity)
    private readonly operationsRepo: Repository<OperationEntity>
  ) {}

  async create(operation: Operation): Promise<OperationEntity> {
    const newOperation = new OperationEntity(operation);
    return await this.operationsRepo.save(newOperation);
  }

  async findById(id: string): Promise<OperationEntity | null> {
    return await this.operationsRepo.findOneBy({ id });
  }
}
