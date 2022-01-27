import { ApolloServer } from 'apollo-server';
import { getEnv } from 'src/utils/env';
import BinanceAPI from 'src/dataSources/BinanceAPI';
import CoinbaseAPI from 'src/dataSources/CoinbaseAPI';
import { typeDefs } from 'src/schema';
import { resolvers } from 'src/resolvers';
import { Context } from 'src/types';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: (): Context['dataSources'] => ({
        binanceAPI: new BinanceAPI(),
        coinbaseAPI: new CoinbaseAPI(),
    })
});

(async (): Promise<void> => {
    const { url } = await server.listen({ port: getEnv('PORT') });

    console.log(`🚀 Backend server ready at ${url}`);
})().catch((error) => console.error(error));
