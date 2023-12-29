import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
import { SiteModule } from './site/site.module';
import { PageModule } from './page/page.module';
import { PageConfigModule } from './page/page-config/page-config.module';
import { DatabaseModule } from '@comm/comm/database/database.moudle';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    SiteModule,
    PageModule,
    PageConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
