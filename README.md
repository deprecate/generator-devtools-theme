# Yeoman Generator for Chrome DevTools Theme [![Build Status](https://secure.travis-ci.org/zenorocha/generator-devtools-theme.png?branch=master)](https://travis-ci.org/zenorocha/generator-devtools-theme)

![Chrome + Yeoman](https://cloud.githubusercontent.com/assets/398893/3528084/997c7862-078b-11e4-9625-abb02d039f83.png)

> A Yeoman Generator that provides a functional boilerplate to easily create
> custom Chrome DevTools Themes via Chrome Extensions.
>
> More info at [Chromium Issue #318566](https://code.google.com/p/chromium/issues/detail?id=318566).

## Getting started

1. Install using NPM:

    ```sh
    $ [sudo] npm install -g generator-devtools-theme
    ```

2. Scaffold your new project:

    ```sh
    $ yo devtools-theme
    ```

3. Start writing your custom Chrome DevTools Theme.
4. Publish it on [Chrome Web Store](https://chrome.google.com/webstore/)!

## Usage

**Attention:** The ability of using custom Chrome DevTools Themes is only
available in [Chrome Canary](https://www.google.com/intl/en/chrome/browser/canary.html) for now.

1. Enable DevTools experiments in `chrome://flags/#enable-devtools-experiments`.
2. Open DevTools > *Settings* > *Experiments* > *Allow UI themes*.

Now you are able to use any custom Chrome DevTools Theme via Chrome Extension.

## Structure

The basic structure of the project is given in the following way.

```
.
├── .editorconfig
├── devtools.html
├── devtools.js
└── styles.css
```

## History

For detailed changelog, see [Releases](https://github.com/zenorocha/generator-devtools-theme/releases).

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
