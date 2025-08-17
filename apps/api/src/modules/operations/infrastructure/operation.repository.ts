import { IOperationRepository } from '../domain/operation.repository';
import { OperationEntity } from './operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Operation } from '../domain/operation';

@Injectable()
export class OperationRepository implements IOperationRepository {
  constructor(
    @InjectRepository(OperationEntity)
    private readonly operationsRepo: Repository<OperationEntity>
  ) {}

  async create(operation: Operation): Promise<Operation> {
    const newOperation = new OperationEntity();
    newOperation.fromDomain(operation);

    const saved = await this.operationsRepo.save(newOperation);

    return saved.toDomain();
  }

  async findById(id: string): Promise<Operation | null> {
    const operation =  await this.operationsRepo.findOneBy({ id });

    return operation ? operation.toDomain() : null;
  }
}
