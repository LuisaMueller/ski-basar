import { mapClasses } from '@lenne.tech/nest-server';
import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema } from 'mongoose';
import { PersistenceModel } from '../../common/models/persistence.model';
import { User } from '../user/user.model';
import { Customer } from './customer.model';
import { TableItem } from './table-item.model';

export type ListDocument = List & Document;

/**
 * List model
 */

@ObjectType({ description: 'List' })
@MongooseSchema({ timestamps: true })
export class List extends PersistenceModel {
  // ===================================================================================================================
  // Properties
  // ===================================================================================================================

  /**
   * Number of List
   */
  @Field(() => Number, {
    description: 'Number of List',
    nullable: true,
  })
  @Prop()
  number: number = undefined;

  /**
   * TableItems of List
   */
  @Field(() => [TableItem], {
    description: 'TableItems of List',
    nullable: true,
  })
  @Prop()
  tableItems: TableItem[] = undefined;

  /**
   * ArchivedTableItems of List
   */
  @Field(() => [TableItem], {
    description: 'ArchivedTableItems of List',
    nullable: true,
  })
  @Prop()
  archivedTableItems: TableItem[] = undefined;

  /**
   * DeletedTableItems of List
   */
  @Field(() => [TableItem], {
    description: 'DeletedTableItems of List',
    nullable: true,
  })
  @Prop()
  deletedTableItems: TableItem[] = undefined;

  /**
   * Editor of List
   */
  @Field(() => User, {
    description: 'Editor of List',
    nullable: true,
  })
  @Prop({ type: Schema.Types.ObjectId, ref: 'User' })
  editor: User = undefined;

  /**
   * Note of List
   */
  @Field(() => String, {
    description: 'Note of List',
    nullable: true,
  })
  @Prop()
  note: string = undefined;

  /**
   * Fee of List
   */
  @Field(() => Number, {
    description: 'Fee of List',
    nullable: true,
  })
  @Prop()
  fee: number = undefined;

  /**
   * Customer of List
   */
  @Field(() => Customer, {
    description: 'Customer of List',
    nullable: false,
  })
  @Prop()
  customer: Customer = undefined;

  /**
   * isMailStartSend of List
   */
  @Field(() => Boolean, {
    description: 'isMailStartSend of List',
    nullable: true,
  })
  @Prop()
  isMailStartSend: boolean = undefined;

  /**
   * isMailEndSend of List
   */
  @Field(() => Boolean, {
    description: 'isMailEndSend of List',
    nullable: true,
  })
  @Prop()
  isMailEndSend: boolean = undefined;

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
    // Check permissions for properties of this object and return the object afterwards
    return this;
  }
}

export const ListSchema = SchemaFactory.createForClass(List);
