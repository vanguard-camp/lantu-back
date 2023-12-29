import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: '蒙少' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ example: '蒙绍' })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'ssmdmsn@hotmail.com' })
  email: string;

  @ApiProperty({ example: 'Mengsio' })
  enName?: string;

  @ApiProperty({ example: 'head.pnd' })
  avatar?: string;

  @ApiProperty({ example: '15010149396' })
  mobile?: string;

  @ApiProperty({ example: '123' })
  departmentId?: number;
}
