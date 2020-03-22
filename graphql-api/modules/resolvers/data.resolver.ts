import { Query, Resolver, Mutation, Arg, Int, Authorized } from "type-graphql";
import { Data } from "../schema/data.schema";
import { DataService } from "../services/data.service";
import { ObjectIdScalar } from "../../my-scalars/object-id.scalar";
import { ObjectId } from "bson";
import { DataInput } from "../inputs/data.input";
@Resolver()
export class DataResolver {
  //
  constructor(private readonly dataService: DataService) {}

  @Query(() => [Data])
  async getData() {
    return this.dataService.getAll();
  }

  @Query(() => Data, { nullable: true })
  async getSingleData(
    @Arg("_id", type => ObjectIdScalar, { nullable: true }) _id: ObjectId
  ) {
    return this.dataService.getOne(_id);
  }

  @Mutation(() => Data)
  async addData(@Arg("data") data: DataInput): Promise<Data> {
    return this.dataService.add(data);
  }
}
