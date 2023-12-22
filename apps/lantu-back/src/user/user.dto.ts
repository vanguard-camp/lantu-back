import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @ApiProperty({ example: '123' })
  id?: string;

  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'cookie@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'cookietoy' })
  @IsNotEmpty()
  username: string;
}