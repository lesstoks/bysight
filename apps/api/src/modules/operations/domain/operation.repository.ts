import { Operation } from './operation';

export interface IOperationRepository {
  create: (operation: Operation) => Promise<Operation>;
  findById: (id: string) => Promise<Operation | null>;
}
