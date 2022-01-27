import { getEnv } from 'src/utils/env';
import Exchange, { OrderBook } from 'src/dataSources/Exchange';
import { ExchangeName } from 'src/types';

const BTC_USDT_ORDER_BOOK_KEY = 'BTCUSDT' as const;

class BinanceAPI extends Exchange {
    protected name = ExchangeName.BINANCE;

    baseURL = getEnv('BINANCE_API_BASE_URL');

    async getOrderBook(): Promise<OrderBook> {
        return await this.get<OrderBook>(
            '/api/v3/depth',
            { symbol: BTC_USDT_ORDER_BOOK_KEY, limit: this.maxOfferCount }
        );
    }
}

export default BinanceAPI;
