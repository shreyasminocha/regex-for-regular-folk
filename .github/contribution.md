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
-   🎤…

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

We use [alex](https://alexjs.com) to automatically test for inconsiderate language.

```sh
npm run alex
```

It isn't very clever—sorry if it bothers you with false-positives. Please try to use synonyms, if possible.
