import { getEnv } from 'src/utils/env';
import Exchange, { OrderBook } from 'src/dataSources/Exchange';
import { ExchangeName } from 'src/types';

const BTC_USDT_ORDER_BOOK_KEY = 'BTC-USDT' as const;

class CoinbaseAPI extends Exchange {
    protected name = ExchangeName.COINBASE;

    baseURL = getEnv('COINBASE_API_BASE_URL');

    async getOrderBook(): Promise<OrderBook> {
        return await this.get<OrderBook>(
            `/products/${BTC_USDT_ORDER_BOOK_KEY}/book`,
            { level: 3 });
    }
}

export default CoinbaseAPI;
