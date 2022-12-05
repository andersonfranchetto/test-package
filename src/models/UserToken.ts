import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class UserToken {

    @Field()
    id: number

    @Field()
    email: string

    @Field()
    name: string

    @Field()
    subdomain: string
}
