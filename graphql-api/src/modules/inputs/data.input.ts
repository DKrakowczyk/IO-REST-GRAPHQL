import { InputType, Field } from "type-graphql";

@InputType()
export class DataInput {
  //
  @Field({ description: "Title of the document" })
  name: string;
  @Field({ description: "Title of the document" })
  description: string;
  @Field({ description: "Amount of the advance" })
  price: number;
}
