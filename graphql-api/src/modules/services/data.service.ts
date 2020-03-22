import { ObjectId } from "bson";
import { Data, DataModel } from "../schema/data.schema";
import { DataInput } from "../inputs/data.input";
import { Service } from "typedi";

@Service()
export class DataService {
  constructor() {}

  async getAll(): Promise<Data[]> {
    return await DataModel.find().exec();
  }

  async getOne(_id: string): Promise<Data> {
    if (_id) return DataModel.findOne({ _id: new ObjectId(_id) });
  }

  async add(data: DataInput): Promise<Data> {
    const newData = new DataModel({
      ...data
    });
    return newData.save();
  }
}
