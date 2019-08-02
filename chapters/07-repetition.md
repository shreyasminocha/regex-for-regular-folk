## Repetition

### Making things optional

We can make parts of regex optional. We achieve this (among other things) using the `?` operator.

![/a?/g](media/exported/a_question.png)

Here’s another example:

![/https?/g](media/exported/https_question.png)

Here the`s` following `http` is optional.

We can also make capturing and non-capturing groups optional. The ability to repeat groups is really powerful.

![/url: (www\.)?example\.com/g](media/exported/example.com.png)

### Zero or more

If we wish to match zero or more of a token, we can suffix it with a `*`.

![/a*/g](media/exported/a*.png)

Our regex matches even an empty string `“”`.

### One or more

If we wish to match zero or more of a token, we can suffix it with a `+`.

![/a+/g](media/exported/a+.png)

### Exactly `x` times

If we wish to match a particular token exactly `x` times, we can suffix with with `{x}`. This is functionally identical to repeatedly copy-pasting the token `x` times, but using `{x}` is often a lot less tedious.

![/a{3}/g](media/exported/a{3}.png)

Here's an example that matches an uppercase six-character hex colour code.

![/#[0-9A-Z]{6}/g](media/exported/#[0-9A-Z]{6}.png)

The token `{6}` applies to the character class `[0-9A-F]`, of course.

### Between `min` and `max` times

If we wish to match a particular token between `min` and `max` times, we can suffix it with `{min,max}`.

![/a{2,4}/g](media/exported/a{2,4}.png)

Warning: There must be no space after the comma in `{min,max}`.

Note: Both `min` and `max` is included in the range.

### At least `x` times

If we wish to match a particular token at least, we can suffix it with `{x,}`. Think of it as [`{min,max}`](#between-min-and-max-times), but without an upper bound.

![/a{2,}/g](media/exported/a{2,}.png)

### A note on *greediness*
