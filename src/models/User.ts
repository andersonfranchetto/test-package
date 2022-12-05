import { ObjectType } from "type-graphql";
import { IUser } from "../interfaces/IUser";
import PaginatedResponse from "./PaginatedResponse";

@ObjectType({ implements: IUser })
export class User extends IUser {}

@ObjectType()
export class PaginatedUserResponse extends PaginatedResponse(User) {}
