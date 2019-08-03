## Flags

Flags allow us to put our regexes into different "modes", so to speak. Remember how we took for granted the part after the final `/` in `/pattern/`? We'll get into the details of those now.

There are 5 kinds of flags:

- `g` — global
- `i` — (case) insensitive
- `m` — multiline
- `u` — unicode
- `y` — sticky

### Global (`g`)

All examples thus far have had the global flag. When the global flag isn't enabled, the regex doesn't match anything beyond the first match.

### (Case) Insensitive (`i`)

As the name suggests, enabling the "insensitive" flag makes the regex case insensitive about matching text.

### Multiline (`m`)

The multiline flag has to do with the regex's handling of anchors when dealing with "multiline" strings, that is strings that include newlines (`\n`) and thus spans over multiple lines. By default, the regex `/^foo$/` would match only `"foo"`. We might want it to match `foo` when it is in a line by itself in a multiline string.

### Unicode (`u`)

### Sticky (`y`)