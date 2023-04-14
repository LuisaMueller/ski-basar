import { ConfigService } from '@lenne.tech/nest-server';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PubSub } from 'graphql-subscriptions';
import { UserModule } from '../user/user.module';
import { Customer, CustomerSchema } from './customer.model';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

/**
 * Customer module
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }]), forwardRef(() => UserModule)],
  controllers: [],
  providers: [
    ConfigService,
    CustomerResolver,
    CustomerService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: [MongooseModule, CustomerResolver, CustomerService],
})
export class CustomerModule {}
