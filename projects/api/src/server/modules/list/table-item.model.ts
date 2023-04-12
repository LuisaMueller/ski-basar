import { equalIds, mapClasses, Restricted, RoleEnum } from '@lenne.tech/nest-server';
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PersistenceModel } from '../../common/models/persistence.model';
import { User } from '../user/user.model';

export type TableItemDocument = TableItem & Document;

/**
 * TableItem model
 */
@Restricted(RoleEnum.ADMIN)
@ObjectType({ description: 'TableItem' })
@MongooseSchema({ timestamps: true })
export class TableItem extends PersistenceModel {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Number of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Number of TableItem',
    nullable: true,
  })
  @Prop()
  number: string = undefined;

  /**
   * classification of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Classification of TableItem',
    nullable: true,
  })
  @Prop()
  classification?: string = undefined;

  /**
   * brand of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Brand of TableItem',
    nullable: true,
  })
  @Prop()
  brand?: string = undefined;

  /**
   * size of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Size of TableItem',
    nullable: true,
  })
  @Prop()
  size?: string = undefined;

  /**
   * color of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Color of TableItem',
    nullable: true,
  })
  @Prop()
  color?: string = undefined;

  /**
   * other of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Other of TableItem',
    nullable: true,
  })
  @Prop()
  other?: string = undefined;

  /**
   * prize of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Prize of TableItem',
    nullable: true,
  })
  @Prop()
  prize?: string = undefined;

  /**
   * vb of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'VB of TableItem',
    nullable: true,
  })
  @Prop()
  vb?: string = undefined;

  /**
   * cash of TableItem
   */
  @Restricted(RoleEnum.S_EVERYONE)
  @Field(() => String, {
    description: 'Cash of TableItem',
    nullable: true,
  })
  @Prop()
  cash?: string = undefined;

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
    return mapClasses(input, { tableItems: TableItem, createdBy: User, editor: User }, this);
  }

  /**
   * Verification of the user's rights to access the properties of this object
   *
   * Check roles, prepare or remove properties
   * Return undefined if the whole object should not be returned or throw an exception to stop the whole request
   */
  override securityCheck(user: User, force?: boolean) {
    // In force mode or for admins everything is allowed
    if (force || user?.hasRole(RoleEnum.ADMIN)) {
      return this;
    }

    // Usually only the creator has access to the object
    if (!equalIds(user, this.createdBy)) {
      return undefined;
    }

    // Check permissions for properties of this object and return the object afterwards
    return this;
  }
}

export const TableItemSchema = SchemaFactory.createForClass(TableItem);
