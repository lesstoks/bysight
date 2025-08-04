import { randomUUID } from 'crypto';
import { Operation } from '../operation';

export class OperationFactory {
  static create(name: string, operationsCode: string) {
    const operationId = randomUUID();
    return new Operation(operationId, name, operationsCode)
  }
}
