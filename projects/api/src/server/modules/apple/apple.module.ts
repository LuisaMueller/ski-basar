import { ConfigService } from '@lenne.tech/nest-server';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { UserModule } from '../user/user.module';
import { Apple, AppleSchema } from './apple.model';
import { AppleResolver } from './apple.resolver';
import { AppleService } from './apple.service';

/**
 * Apple module
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: Apple.name, schema: AppleSchema }]), forwardRef(() => UserModule)],
  controllers: [],
  providers: [
    ConfigService,
    AppleResolver,
    AppleService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: [MongooseModule, AppleResolver, AppleService],
})
export class AppleModule {}
