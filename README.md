## Graph QQL Minters

This project builds a Subgraph indexer to know who minted [QQL](https://archipelago.art/collections/qql), a generative NFT collection by [Tyler Hobbs](https://twitter.com/tylerxhobbs) and [Dandelion Wist Mané](https://twitter.com/dandelion_wist).

## Installation

1. Go to [https://thegraph.com/studio/](https://thegraph.com/studio/) and create a Subgraph for Ethereum mainnet named `qql-minters`.
2. Install Graph CLI.

```sh
npm install -g @graphprotocol/graph-cli
```

or

```sh
yarn global add @graphprotocol/graph-cli
```

3. Open a terminal in `graph-qql-minter` and install the project dependencies.

```sh
yarn
```

or

```sh
npm install
```

4. Deploy the Subgraph with your deploy key from https://thegraph.com/studio/subgraph/qql-minters/.

```sh
graph auth --studio <deploy key>
graph build
graph deploy --studio qql-minters
```

You will get a development query URL.
You can also use the playground on https://thegraph.com/studio/subgraph/qql-minters/.
