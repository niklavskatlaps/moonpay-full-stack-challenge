import { Resolvers } from 'src/types';

const exchangeRouting: Resolvers = {
    Query: {
        /**
         * Get the data about all offers from all exchanges that are added to the context and return the one with the lowest cost.
         * The final price is formatted at the very end in order to ensure a precise price comparison.
         */
        async getBestOffer(
            _,
            { btcAmount },
            { dataSources }
        ) {
            const averageOffers = await Promise.all(Object.values(dataSources).map(
                (exchange) => exchange.getAverageOffer(btcAmount)
            ));

            const bestOffer = averageOffers.reduce(
                (prev, curr) => prev.usdAmount < curr.usdAmount ? prev : curr
            );

            return { ...bestOffer, usdAmount: +(bestOffer.usdAmount).toFixed(2) };
        }
    }
};

export default exchangeRouting;
