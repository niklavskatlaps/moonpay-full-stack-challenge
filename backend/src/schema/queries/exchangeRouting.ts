import { gql } from 'apollo-server';

export default gql`
    type Query {
        getBestOffer(btcAmount: Float!): Offer!
    }
`;
