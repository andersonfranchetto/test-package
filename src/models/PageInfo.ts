import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class PageInfo {
    @Field(() => Int)
    perPage: number;

    @Field(() => Int)
    currentPage: number;

    @Field(() => Int)
    count: number;

    @Field(() => Int)
    pagesCount: number;
}
