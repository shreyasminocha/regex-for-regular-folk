## Character classes

It’s possible to match a character from one of several characters. Here’s an example:

![/[aeiou]/g](media/exported/[aeiou].png)

Our regex `/[aeiou]/g` matches all vowels in our input strings.

Here’s another example of these in action:

![/p[aeiou]t/g](media/exported/p[aeiou]t.png)

We match a `p`, followed by one of the vowels, followed by a `t`.

There’s an intuitive shortcut for matching a character from within a continuous _range_.

![/[a-z]/g](media/exported/[a-z].png)

We can combine ranges and individual characters in our regexes.

![/[A-Za-z0-9_-]/g](media/exported/[A-Za-z0-9_-].png)

Our regex `/[A-Za-z0-9_-]/g` matches a single character, which must be (at least) one of the following:

- from `A-Z`
- from `a-z`
- from `0-9`
- one of `_` and `-`.

We can also “negate” these rules:

![/[^aeiou]/g](media/exported/[^aeiou].png)

The only difference between the first regex of this chapter and `/[^aeiou]/g` is the `^` immediately after the opening bracket. Its purpose is to negate the rules defined within the brackets. We are now saying:

> “match any character that is _not_ any of _«blah»_, _«blah»_ or _«blah»_.

… instead of:

> “match any character that is at least one of _«blah»_, _«blah»_ and _«blah»_”

Here, _«blah»_ is either an individual character or a range of characters.
