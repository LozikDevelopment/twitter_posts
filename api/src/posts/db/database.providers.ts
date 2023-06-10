import { Sequelize } from 'sequelize-typescript';
import { Post } from './post';

import * as dotenv from 'dotenv';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.URI, {
        dialect: 'postgres',
        ssl: true,
        dialectOptions: {
          ssl: {
            require: true,
          }
        }
      });
      sequelize.addModels([Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];