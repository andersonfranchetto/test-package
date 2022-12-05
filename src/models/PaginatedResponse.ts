import { GraphQLScalarType } from "graphql";
import { ClassType, Field, ObjectType } from "type-graphql";
import { PageInfo } from "./PageInfo";

export default function PaginatedResponse<TItemsFieldValue>(
    itemsFieldValue: ClassType<TItemsFieldValue> | GraphQLScalarType | String | Number | Boolean,
) {
    @ObjectType({ isAbstract: true })
    abstract class PaginatedResponseClass {

        @Field(() => [itemsFieldValue])
        items: TItemsFieldValue[];

        @Field()
        pagination: PageInfo;
    }
    return PaginatedResponseClass;
}
