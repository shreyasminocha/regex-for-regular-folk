#!/usr/bin/env/bash

pandoc -t gfm --wrap none -o dist/book.md chapters/*.md
pandoc meta.yml -o dist/book.epub chapters/*.md
pandoc -f markdown-implicit_figures -o dist/book.pdf chapters/*.md --metadata-file meta.yml --dpi 300
