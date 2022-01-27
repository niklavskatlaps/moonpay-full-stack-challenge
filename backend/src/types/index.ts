import CoinbaseAPI from 'src/dataSources/CoinbaseAPI';
import BinanceAPI from 'src/dataSources/BinanceAPI';

export * from 'src/types/generated';

export interface Context {
    dataSources: {
        binanceAPI: BinanceAPI
        coinbaseAPI: CoinbaseAPI
    }
}
