import { gql } from 'apollo-server';

export default gql`
    type Offer {
        btcAmount: Float!,
        usdAmount: Float!,
        exchange: ExchangeName!
    }
    
    enum ExchangeName {
        binance
        coinbase
    }
`;
