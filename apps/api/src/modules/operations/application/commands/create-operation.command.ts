export class CreateOperationCommand {
  constructor(
    public readonly name: string,
    public readonly operationsCode: string,
  ) {}
}
