import { ConfigModule, ConfigService } from '@nestjs/config';
import { Progress } from 'src/progress/entities/progress.entity';
import { Serie } from 'src/series/entities/serie.entity';
import { Typeserie } from 'src/series/entities/typeserie.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const configServices = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configServices.get('DB_HOST'),
  port: configServices.get('DB_PORT'),
  username: configServices.get('DB_USER'),
  password: configServices.get('DB_PASSWORD'),
  database: configServices.get('DB_NAME'),
  entities: [User, Serie, Progress, Typeserie],
  synchronize: true,
  logging: false,
};

export const appDS = new DataSource(DataSourceConfig);
