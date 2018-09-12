```
╭───────╮                    ╭────╮
│    ╭──╯╭───╮╭───╮╭──────╮  ├────┤╭──────╮╭──────╮╭────┬─╮╭──────╮
│    ╰──╮├───┤│   ││  ──  │  │    ││   ╭──╯│   ╭╮ ││      ││  ────┤
│    ╭──╯│   ││   ││      │  │    ││   ╰──╮│   ││ ││   ╭╮ ││      │
│    │   │   ││   ││  ────┤  │    ││      ││   ╰╯ ││   ││ │├────  │
╰────╯   ╰───╯╰───╯╰──────╯  ╰────╯╰──────╯╰──────╯╰───╯╰─╯╰──────╯
╭─╮  ╭─╮  ┬─╮         ┬  ╭─╮  ┬  ┬  ╭─╮  ╭─╮  ╭─╮  ┬─╮  ┬  ╭─╮  ╭┬╮
├┤   │ │  ├┬╯         │  ├─┤  ╰╮╭╯  ├─┤  ╰─╮  │    ├┬╯  │  ├─╯   │
┴    ╰─╯  ┴╰─       ╰─╯  ┴ ┴   ╰╯   ┴ ┴  ╰─╯  ╰─╯  ┴╰─  ┴  ┴     ┴
```
> File specific icons for the browser from Atom File-icons, https://github.com/file-icons/atom

<img alt="Icon previews" width="850" src="https://raw.githubusercontent.com/file-icons/atom/6714706f268e257100e03c9eb52819cb97ad570b/preview.png" />

## Install

Use `npm` to install as follows,

```bash
npm i @gurupras/file-icons-js
```

## Getting Started

Include `css` styles from `css/style.css` in the header of an html document.

Get an instance of `FileIcons` class,

```js
var icons = window.FileIcons;
```

Get the class name of the icon that represent a filename (for example `text-icon`),

```js
var filename = 'src/app.js';
var class_name = icons.getClass(filename);
```

You can also get a class name of the associated icon color,

```js
var  filename = 'README.md';
var class_name = icons.getClassWithColor(filename);
```

Use the class name to generate html, for example,

```js
document.body.innerHTML = "<a><i class=" + class_name + "></i>$filename</a>";
```

## Resources
- [websemantics/file-icons-js](https://github.com/websemantics/file-icons-js), Original repository from which this was forked.
- [Atom File Icons](https://github.com/file-icons/atom), file specific icons for improved visual grepping.

## Contribution

Contributions to this project are accepted in the form of feedback, bugs reports and even better - pull requests.

## License

[MIT license](https://github.com/gurupras/file-icons-js/)
