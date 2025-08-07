import { OperationFactory } from './operation.factory';

describe.only('Operation factory', () => {
  it('should create a new Operation entity with generated UUID', () => {
    const operation = OperationFactory.create('Northern and Central Luzon Operations', 'NCLOP');

    expect(operation.id).toBeDefined();
    expect(operation.name).toEqual('Northern and Central Luzon Operations');
    expect(operation.operationsCode).toEqual('NCLOP');
  });
});
