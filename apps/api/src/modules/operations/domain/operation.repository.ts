import { Operation } from './operation';

export interface IOperationsRepository {
  create: (operation: Operation) => Promise<Operation>;
  findById: (id: string) => Promise<Operation | null>;
}
