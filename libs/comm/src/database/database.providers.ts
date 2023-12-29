import { getConfig } from 'apps/user/src/utils';
import { NamingStrategy } from './naming.strategies';
import { DataSource } from 'typeorm';
import { User } from 'apps/user/src/user/user.mysql.entity';
import { Department } from 'apps/user/src/department/department.mysql.entity';
import { Site } from 'apps/lantu-back/src/site/site.mongo.entity';

const { MONGODB_CONFIG, MYSQL_CONFIG } = getConfig();

const MONGODB_DATABASE_CONFIG = {
  ...MONGODB_CONFIG,
  namingStrategy: new NamingStrategy(),
  // entities: [`dist/**/*.${MONGODB_CONFIG.entities}.entity{.ts,.js}`],
  entities: [Site],
};

const MYSQL_DATABASE_CONFIG = {
  ...MYSQL_CONFIG,
  namingStrategy: new NamingStrategy(),
  // entities: [`dist/**/*.${MYSQL_CONFIG.entities}.entity.js`],
  entities: [User, Department],
};

const MONGODB_DATA_SOURCE = new DataSource(MONGODB_DATABASE_CONFIG);
const MYSQL_DATA_SOURCE = new DataSource(MYSQL_DATABASE_CONFIG);

export const DatabaseProviders = [
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      if (!MONGODB_DATA_SOURCE.isInitialized) {
        await MONGODB_DATA_SOURCE.initialize();
      }
      return MONGODB_DATA_SOURCE;
    },
  },
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      if (!MYSQL_DATA_SOURCE.isInitialized) {
        await MYSQL_DATA_SOURCE.initialize();
      }
      return MYSQL_DATA_SOURCE;
    },
  },
];
