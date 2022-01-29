# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
* everything that came together with CRA.
* `axios` - to fetch currencies.
* `react-data-table-component` - so that I don't have to create the whole table from scratch.
* `styled-components` - was needed for the dependency mentioned above + created my own styled components as well.

### Q) What's the command to start the frontend application locally?
`docker-compose up frontend` and you can append `-d` to run the container in background.

### Q) What libraries did you add to the backend? What are they used for?
Dependencies:
* `@graphql-tools/merge` - to merge GraphQL type definitions that are defined in different files.
* `apollo-datasource-rest` - to make the life easier when creating REST data sources.
* `apollo-server` - my GraphQL server of choice.
* `dotenv` - to load environment variables.
* `graphql` - this was a peer dependency for other libraries.

DevDependencies:
* `@graphql-codegen/cli` - to generate TypeScript types from the GraphQL schema.
* `@graphql-codegen/typescript` - a plugin for the thing mentioned above.
* `@graphql-codegen/typescript-resolvers` - same as above.
* `@types/node` - for obvious reasons.
* `eslint` and some ESLint plugins - to help me fix some problems in my code that I might miss.
* `nodemon` - for hot reloading.
* `ts-node` - to execute the code.
* `tsconfig-paths` - to make absolute paths work.
* `typescript` - :)

### Q) What's the command to start the backend application locally?
`docker-compose up backend` and you can append `-d` to run the container in background.

GraphQL query: 
```graphql
query GetBestOrder($btcAmount: Float!) {
  getBestOffer(btcAmount: $btcAmount) {
    btcAmount
    usdAmount
    exchange
  }
}
```

Query variables:
```json
{
  "btcAmount": 1
}
```

### Q) Any other comments we should read before evaluating your solution?
* Updated `docker-compose.yml` to use yarn instead of npm in order to install dependencies from the `yarn.lock` file, I hope it's ok.
* Please ignore `/backend/src/types/generated.ts` - it's an auto-generated file.

---

# General:

### Q) If you had more time, what further improvements or new features would you add?
* Wouldn't hurt to add unit tests.
* Could set this project up using yarn workspaces.
* With a bit of refactoring and abstraction could potentially implement support for different coins dynamically, not only for the BTC-USDT pair.

### Q) Which parts are you most proud of? And why?
I like the way BE is structured - I believe it's robust, clean and does the job well. For example, adding new exchanges to the comparison
would be really easy:

1. Add the name of the exchange to the GraphQL schema
2. Create a new data source that extends the abstract class which essentially does most of the job
3. By following the interface, set the exchange name and base URL for Order Book fetching
4. Implement the method that fetches Order Books and returns them in the expected format
5. Add this newly created exchange to the context

### Q) Which parts did you spend the most time with? What did you find most difficult?
* It took some time to come up with a proper logic for the best price retrieval, but I am happy with the way I managed to make it work.
* Not that difficult but setting up the project from scratch is a bit time-consuming.
* This was my first time working with `styled-components`.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
For me, the only thing that was missing was a bit more detail description on the BE logic. I am still not 100% sure whether I understood
the expected result correctly, e.g., what exactly should we do when the requested BTC amount exceeds the total amount found in the Order Books?

All in all it was fun!
