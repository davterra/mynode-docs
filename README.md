# Readme

[Starter Documentation Website for myNode]()

This repo makes use of the [VuePress static site generator](https://v1.vuepress.vuejs.org/) to compile a bunch of markdown files into a full documentation website.

## Build the Documentation Locally

In order to build the website locally, you'll need Node.js >= 10.16.

1. Clone the repo
2. Install dependencies
3. Serve locally (by default on port 8080)

```sh
git clone https://github.com/thunderbscuit/mynode-docs.git
yarn install
yarn vuepress dev docs
```

To build the website and push the static files on github, use the `deploy.sh` script.

```sh
source ./deploy.sh
```
