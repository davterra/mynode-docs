# nyNode Example Documentation Website

# What is this thing?
This repo makes use of the [VuePress static site generator](https://v1.vuepress.vuejs.org/) to compile a bunch of markdown files into a full documentation website. There exists lots of static site generators, but VuePress strikes a good balance between ease of setup (it's basically just the file in `/docs/.vuepress/config.js`) and power.

It is easily modified to adjust for more complex UI if needed, but even the defaults produce an easy to use documentation website out-of-the-box. This allows contributors who might not be confortable with frontend development to contribute to the documentation easily by simply making pull requests on the markdown files. A script is run to deploy to GitHub pages for free hosting.

## Build the Documentation Locally

In order to build the website locally, you'll need Node.js >= 10.16.

1. Install dependencies
2. Serve locally (by default on port 8080)

```sh
yarn install
vuepress dev docs
```