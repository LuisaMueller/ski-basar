import { ConfigService } from '@lenne.tech/nest-server';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { UserModule } from '../user/user.module';
import { List, ListSchema } from './list.model';
import { ListResolver } from './list.resolver';
import { ListService } from './list.service';

/**
 * List module
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]), forwardRef(() => UserModule)],
  controllers: [],
  providers: [
    ConfigService,
    ListResolver,
    ListService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: [MongooseModule, ListResolver, ListService],
})
export class ListModule {}
