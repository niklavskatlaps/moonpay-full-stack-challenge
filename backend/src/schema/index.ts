import { mergeTypeDefs } from '@graphql-tools/merge';
import { queries } from 'src/schema/queries';
import { types } from 'src/schema/types';

export const typeDefs = mergeTypeDefs([
    types,
    queries,
]);
