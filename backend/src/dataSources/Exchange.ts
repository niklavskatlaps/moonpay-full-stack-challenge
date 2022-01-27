import { RESTDataSource } from 'apollo-datasource-rest';
import { Offer, ExchangeName } from 'src/types';

export interface OrderBook {
    asks: ReadonlyArray<[string, string]>
}

const DEFAULT_MAX_ORDER_COUNT = 1000;

abstract class Exchange extends RESTDataSource {
    protected abstract name: ExchangeName;

    /**
     * The amount of offers that will be processed in order to retrieve a value for the best average offer.
     */
    protected maxOfferCount = DEFAULT_MAX_ORDER_COUNT;

    /**
     * Retrieved orders should be sorted in ascending order.
     */
    abstract getOrderBook(): Promise<OrderBook>

    async getAverageOffer(amount: number): Promise<Offer> {
        const { asks } = await this.getOrderBook();

        return {
            btcAmount: amount,
            usdAmount: this.#getAverageOfferPrice(asks.slice(0, this.maxOfferCount), amount),
            exchange: this.name
        };
    }

    /**
     * Initially, the idea was to loop through all offers and accumulate the total price for a given BTC amount which worked fine.
     * However, it didn't work in cases when the requested BTC amount exceeded the sum of the BTC amount in the fetched offers.
     * In order to resolve that, a decision to calculate the final price from the average accumulated price was made.
     *
     * Calculations should be precise if the requested amount doesn't exceed the total sum of BTCs in the fetched offers.
     * Calculating the final price from the average price might not get us to a decimal place precision for a large requested amount.
     * Nevertheless, it should be good enough to figure out which exchange has a better offer.
     */
    #getAverageOfferPrice(offers: ReadonlyArray<[string, string]>, btcAmount: number): number {
        const { totalPrice, totalQty } = [...offers].reduce((prev, curr, _, array) => {
            const { totalPrice: prevTotalPrice, totalQty: prevTotalQty } = prev;
            const [price, qty] = curr;

            const totalPrice = prevTotalPrice + (+price * +qty);
            const totalQty = prevTotalQty + +qty;

            if (totalQty >= btcAmount) {
                array.splice(1); // Break out of the loop.

                return {
                    totalPrice: prevTotalPrice + (+price * (btcAmount - prevTotalQty)), // Calculate the price only for the missing amount.
                    totalQty: btcAmount
                };
            }

            return {
                totalPrice,
                totalQty
            };
        }, { totalPrice: 0, totalQty: 0 });

        return (totalPrice / totalQty) * btcAmount;
    }
}

export default Exchange;
