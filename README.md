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
## How to contribute?

### File structure

- All the pages are written in markdown and located in [docs](https://github.com/abhiShandy/mynode-docs/tree/master/docs)
- Create an appropriate subdirectory to collect pages for the same app or section of documentation
- Upload images (preferably PNG) in the matching subdirectory of [/docs/.vuepress/public/images](https://github.com/abhiShandy/mynode-docs/tree/master/docs/.vuepress/public/images)
- Add images to markdown pages using either
  - HTML: `<img>` tag with `src="/images/<SUBDIRECTORY>/<FILENAME>"`
  - Markdown: `![<ALT-TEXT>](/images/<SUBDIRECTORY>/<FILENAME>)`
- Add links to the created pages on the sidebar by editing [docs/.vuepress/config.js](https://github.com/abhiShandy/mynode-docs/blob/master/docs/.vuepress/config.js)

### Minor changes

Use the Github website to suggest changes without going through the hassle of forking and cloning.

1. Navigate to the appropriate folder
2. Click on the relevant markdown file and click on the pencil icon on the top-left corner to edit, or
add a new markdown file by clicking on "Add File" on the top-right corner
3. Make changes using Markdown
4. Preview changes to verify the edits and prevent unintended removals
5. Add a meaningful commit message and optional description under "Propose changes"
6. Click on "Propose Changes" to create a pull-request.
7. Preview the edits and submit.

### Major changes

Follow the usual route of forking and submitting PRs to suggest changes. This is the recommended method even if you have commit access.

1. Fork this repo and clone locally
2. Create a branch
3. Make edits
4. Build the documentation locally by following the steps mentioned above to verify the changes
3. Commit and push changes
4. Create PR
