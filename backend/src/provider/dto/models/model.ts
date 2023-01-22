import { Directive, ObjectType } from '@nestjs/graphql';
import { Provider as GeneratedProvider } from '@Prisma/index';

@ObjectType()
@Directive('@key(fields: "id")')
export class Provider extends GeneratedProvider {}
