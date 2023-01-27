# Document-api

This API was written using [bun.sh](https://bun.sh). Its original intent is to serve ancient documents and scriptures with linguistic parsing and definitions. The controller modules are very easily swapped to serve any backend need, with performance much greater than can be found with an average Express API.

Since the api is read only, data is stored in a sqlite file and only GET requests are handled by the routers.

## Running Locally

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

## Endpoints

**/source** - provides a list of source texts

**/translation** - provides a list of translations for source texts

**/source_text** provides source text for a given source

**/translation_text** provides translation text for a given translation

**/concordance** provides definitions for requested word & version/language

**/parsing** provides the title and description of linguistic parsing based on id

**/verse** provides the id of a given set of passage descriptors to query elsewhere

## to do

- Explore using a lightweight query builder or ORM, depending on need.
- Add a more robust cors solution for local development
- Improve logging middlewares and replace console.log with something like pino logger
