import { equalIds, mapClasses, Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema as MongooseSchema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema } from 'mongoose';
import { PersistenceModel } from '../../common/models/persistence.model';
import { User } from '../user/user.model';

export type GoodsListDocument = GoodsList & Document;

/**
 * GoodsList model
 */
// @Restricted(RoleEnum.ADMIN)
@ObjectType({ description: 'GoodsList' })
@MongooseSchema({ timestamps: true })
export class GoodsList extends PersistenceModel {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Classification of GoodsList
   */
  // @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Classification of GoodsList',
    nullable: true,
  })
  @Prop()
  classification: string = undefined;

  /**
   * Brand of GoodsList
   */
  // @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Brand of GoodsList',
    nullable: true,
  })
  @Prop()
  brand: string = undefined;

  /**
   * Size of GoodsList
   */
  // @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of GoodsList',
    nullable: true,
  })
  @Prop()
  size: string = undefined;

  /**
   * Color of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of GoodsList',
    nullable: true,
  })
  @Prop()
  color: string = undefined;

  /**
   * Extra of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Extra of GoodsList',
    nullable: true,
  })
  @Prop()
  extra: string = undefined;

  /**
   * MaxPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MaxPrize of GoodsList',
    nullable: true,
  })
  @Prop()
  maxPrize: number = undefined;

  /**
   * MinPrize of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => Number, {
    description: 'MinPrize of GoodsList',
    nullable: true,
  })
  @Prop()
  minPrize: number = undefined;

  /**
   * Number of GoodsList
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Number of GoodsList',
    nullable: true,
  })
  @Prop()
  number: string = undefined;

  // ===================================================================================================================
  // Methods
  // ===================================================================================================================

  /**
   * Initialize instance with default values instead of undefined
   */
  override init() {
    super.init();
    // this.xxx = [];
    return this;
  }

  /**
   * Map input
   *
   * Hint: Non-primitive variables should always be mapped (see mapClasses / mapClassesAsync in ModelHelper)
   */
  override map(input) {
    super.map(input);
    return this;
  }

  /**
   * Verification of the user's rights to access the properties of this object
   *
   * Check roles, prepare or remove properties
   * Return undefined if the whole object should not be returned or throw an exception to stop the whole request
   */
  override securityCheck(user: User, force?: boolean) {
    // In force mode or for admins everything is allowed
    if (force) {
      return this;
    }

    // Usually only the creator has access to the object
    // if (!equalIds(user, this.createdBy)) {
    //   return undefined;
    // }

    // Check permissions for properties of this object and return the object afterwards
    return this;
  }
}

export const GoodsListSchema = SchemaFactory.createForClass(GoodsList);
