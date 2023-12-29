import { Inject, Injectable } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Repository } from 'typeorm';
import { Site } from './site.mongo.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class SiteService {
  constructor(
    @Inject('SITE_REPOSITORY') private siteRepository: Repository<Site>,
  ) {}

  create(createSiteDto: CreateSiteDto) {
    try {
      return this.siteRepository.save({ ...createSiteDto });
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  }

  findAll() {
    return this.siteRepository.find();
  }

  findOne(id: string) {
    return this.siteRepository.findOne({
      where: {
        _id: new ObjectId(id),
      },
    });
  }

  update(id: number, updateSiteDto: UpdateSiteDto) {
    return `This action updates a #${id} site`;
  }

  remove(id: number) {
    return `This action removes a #${id} site`;
  }
}
