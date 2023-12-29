import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { API_TYPE, PAGE_TYPE } from '../site.mongo.entity';

export class CreateSiteDto {
  @ApiProperty({ example: '', description: '站点ID' })
  id?: string;

  @ApiProperty({
    example: 'http://localhost:3000/api/doc',
    description: '解析URL',
  })
  @IsNotEmpty()
  url: string;

  @ApiProperty({
    example: API_TYPE.swagger,
    enum: API_TYPE,
    description: '接口来源',
  })
  @IsNotEmpty()
  apiType: API_TYPE;

  @ApiProperty({
    example: '搭建服务',
    description: '站点名称',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '搭建服务',
    description: '站点描述',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: PAGE_TYPE.pc,
    enum: PAGE_TYPE,
    description: '站点类型',
  })
  @IsNotEmpty()
  type: PAGE_TYPE;
}
