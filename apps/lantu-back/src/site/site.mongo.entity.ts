import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectId,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum PAGE_TYPE {
  'pc' = 0,
  'mobile' = 1,
  'weapp' = 2,
}

export enum STATUS_TYPE {
  'activated' = 0,
  'inactive' = 1,
  'deleted' = 2,
}

export enum API_TYPE {
  'swagger' = 0,
}

@Entity()
export class Site {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ default: null })
  description: string;

  @Column({ default: null })
  url: string;

  @Column({ default: null })
  currentVersion: string;

  @Column()
  type: PAGE_TYPE;

  @Column({ default: STATUS_TYPE.inactive })
  status: STATUS_TYPE;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @UpdateDateColumn()
  appointmentUp: string;

  @UpdateDateColumn()
  appointmentDown: string;
}
