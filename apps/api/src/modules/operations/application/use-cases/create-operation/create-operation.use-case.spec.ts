import { CreateOperationUseCase } from './create-operation.use-case';
import { Test } from '@nestjs/testing';
import { OPERATIONS_REPOSITORY } from '../../../constants';
import { CreateOperationRequestDto } from '../../../presenter/dto/create-operation-request.dto';
import { Operation } from '../../../domain/operation';
import { OperationFactory } from '../../../../../factories/operation.factory';

describe('create-operation use case', () => {
  let usecase: CreateOperationUseCase;

  const mockRepo = {
    create: jest.fn(),
  }

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateOperationUseCase,
        {
          provide: OPERATIONS_REPOSITORY,
          useValue: mockRepo,
        }
      ]
    }).compile();

    usecase = module.get(CreateOperationUseCase);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create and return a new operation record from dto', async () => {
    const dto: CreateOperationRequestDto = {
      name: 'South Luzon Operations',
      operationsCode: 'SLOP',
    }

    // mocks
    const fakeOperation = await new OperationFactory().make(dto);
    mockRepo.create.mockResolvedValue(fakeOperation.toDomain());

    const result = await usecase.execute(dto);

    // result
    expect(result).toBeInstanceOf(Operation);
    expect(result.id).toBeDefined();

    // calls
    expect(mockRepo.create).toHaveBeenCalledWith({
      id: expect.any(String),
      name: dto.name,
      operationsCode: dto.operationsCode,
    });
  });
});
