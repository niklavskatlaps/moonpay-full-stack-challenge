# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

### Q) What's the command to start the frontend application locally?

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
* I like the way BE is structured - I believe it's clean and does the job well.

### Q) Which parts did you spend the most time with? What did you find most difficult?
* It took some time to come up with a proper logic for the best price retrieval, but I am happy with the way I managed to make it work.
* Not that difficult but setting up the project from scratch is a bit time-consuming.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.
* It was fun!
