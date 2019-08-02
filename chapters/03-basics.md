## Basics

Regular expressions are typically formatted as `/<rules>/<flags>`. Often people will drop the slashes and the flags for brevity. We’ll get into the details of flags in a later chapter, but the one you need to now now is `g`, which stands for “global”.

Let’s start with a relatively simple regex: `/p/g`.

![/p/g](media/exported/p.png)

As we can see, `/p/g` matches all lowercase `p` characters. Note that regexes are case sensitive by default. If the regex has one or more “matches” within the input string, it is said to “match” the regex. Think of “the matches” as an array, and whether an input “matches” a regex as a boolean.
