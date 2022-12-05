import { Field, ID, InterfaceType } from "type-graphql";

@InterfaceType()
export class IUser {

    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    created_at: Date

    @Field()
    created_user: number

    @Field({nullable: true})
    updated_at: Date

    @Field({nullable: true})
    updated_user: number

    @Field({nullable: true})
    deleted_at: Date

    @Field({nullable: true})
    deleted_user: number

    @Field()
    excluded: boolean
}
