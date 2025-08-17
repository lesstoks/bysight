import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOperationRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  operationsCode: string;
}
