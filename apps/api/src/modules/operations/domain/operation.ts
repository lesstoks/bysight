import { randomUUID } from 'crypto';

export class Operation {
  constructor(
    public id: string = randomUUID(),
    public name: string,
    public operationsCode: string,
  ) {}
}
