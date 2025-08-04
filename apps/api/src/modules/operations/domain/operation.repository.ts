import { OperationEntity } from '../infrastructure/operation.entity';
import { Operation } from './operation';

export interface IOperationsRepository {
  create: (operation: Operation) => Promise<OperationEntity>;
  findById: (id: string) => Promise<OperationEntity | null>;
}
