import { ConfigModule, ConfigService } from '@nestjs/config';
import { Progress } from 'src/progress/entities/progress.entity';
import { Series } from 'src/series/entities/series.entity';
import { Typeserie } from 'src/types-serie/entities/typeSerie.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: process.env.NODE_ENV,
});

const configServices = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configServices.get('DB_HOST'),
  port: configServices.get('DB_PORT'),
  username: configServices.get('DB_USER'),
  password: configServices.get('DB_PASSWORD'),
  database: configServices.get('DB_NAME'),
  entities: [User, Series, Progress, Typeserie],
  synchronize: true,
  logging: false,
};

export const appDS = new DataSource(DataSourceConfig);
