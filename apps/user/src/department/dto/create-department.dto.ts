import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  @ApiProperty({ example: '研发部' })
  name: string;

  @ApiProperty({ example: '' })
  createTime?: string;

  @ApiProperty({ example: '' })
  updateTime?: string;
}
