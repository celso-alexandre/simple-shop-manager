import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Login {
  @Field(() => String)
  token!: string;
}
