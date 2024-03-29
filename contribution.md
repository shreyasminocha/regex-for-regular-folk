# Contributing to REFRF

Thanks for taking the initiative to contribute to REFRF! 🎉

## How can I contribute?

Contributions of all sorts are welcome. Check out [open issues](https://github.com/shreyasminocha/regex-for-regular-folk/issues?q=is%3Aissue+is%3Aopen) if you're looking for something to work on.

### Writing

-   Correct technical inaccuracies
-   Proofread
-   Add examples and/or illuminating test cases
-   Improve explanations
-   Add chapters
-   Add translations
-   🎤…

#### Translating

1. Create a directory within `chapters/` with the [two-letter ISO code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) of the language you're translating to (`en` for English, `fr` for French, …).
2. Duplicate the contents of `chapters/en/` into the new directory.
3. Translate the newly created files. Do not translate the names of the files themselves.
4. Create a PR!

### Web Development

-   Refactor code for components and layouts
-   Resolve our [open issues](https://github.com/shreyasminocha/regex-for-regular-folk/issues?q=is%3Aissue+is%3Aopen)
-   🎤…

## Environment

Clone the repo:

```sh
git clone git@github.com:shreyasminocha/regex-for-regular-folk.git refrf
cd refrf
```

Assuming you have `npm` and `node` installed, install dependencies:

```sh
npm install
```

### Development web server

```sh
npm run dev
```

## Style

### Commit messages

Please format your commit messages according to [the seven rules of commit messages](https://chris.beams.io/posts/git-commit/#seven-rules). You can look through the repo's commit history for examples.

You can test your commit messages with:

```sh
npx seven-rule-msg 'Add advanced examples'
```

### Code and markdown files

We use [prettier](https://prettier.io) for formatting our code and mdx files.

Check for formatting errors:

```sh
npm run lint-check
```

Fix formatting errors:

```sh
npm run lint
```

### Language guidelines

We use British English.
