[![Netlify Status](https://api.netlify.com/api/v1/badges/000195c2-d038-4841-b9ae-e87e60bc5f4c/deploy-status)](https://app.netlify.com/sites/gracious-turing-7c789f/deploys)

# MyNode documentation

Community-built documentation for [MyNode](https://mynodebtc.com/) - a neat way to run bitcoin and lightning node and many more apps.

This repo makes use of the [VuePress](https://vuepress.vuejs.org/) to compile a bunch of markdown files into a full documentation website.

## Build the documentation locally

1. Install dependencies: Node.js 10+ and Yarn
  - [Install Node](https://nodejs.org/en/)
  - [Install Yarn](https://classic.yarnpkg.com/en/docs/install)
2. Run the following commands:
```sh
# Clone this repo
git clone https://github.com/abhiShandy/mynode-docs.git
# Install required node modules
yarn install
# serve locally (by default on port 8080)
yarn docs:dev
```
