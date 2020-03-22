import { ObjectType, Field } from 'type-graphql';
import {
  prop as Property,
  arrayProp as ArrayProperty,
  Typegoose
} from 'typegoose';
import { ObjectId } from 'mongodb';
import { ObjectIdScalar } from '../../my-scalars/object-id.scalar';

@ObjectType({ description: 'The data model' })
export class Data extends Typegoose {
  //
  @Field(type => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: 'Product name' })
  @Property()
  name: string;

  @Field({ description: 'Product description' })
  @Property()
  description: string;

  @Field({ description: 'Product price' })
  @Property()
  price: number;

  @Field({ description: 'Saved at' })
  @Property()
  createdAt: Date;
}

export const DataModel = new Data().getModelForClass(Data);
