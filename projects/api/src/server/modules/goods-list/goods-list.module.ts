import { ConfigService } from '@lenne.tech/nest-server';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { UserModule } from '../user/user.module';
import { GoodsList, GoodsListSchema } from './goods-list.model';
import { GoodsListResolver } from './goods-list.resolver';
import { GoodsListService } from './goods-list.service';

/**
 * GoodsList module
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: GoodsList.name, schema: GoodsListSchema }]),
    forwardRef(() => UserModule),
  ],
  controllers: [],
  providers: [
    ConfigService,
    GoodsListResolver,
    GoodsListService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: [MongooseModule, GoodsListResolver, GoodsListService],
})
export class GoodsListModule {}
