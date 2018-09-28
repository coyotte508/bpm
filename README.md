# bpm

## Project setup

Install node.js: https://nodejs.org/en/

Then, in the project folder:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

You can test live changes in the browser.

### Compiles and minifies for production
```
npm run build
```

The `dist` folder will contain everything. The main file is named `index.html`, but there are also folders/files that need to be present on the server.

If you plan on putting the project in a subfolder, then you should change `baseUrl` in `vue.config.js` before building. Currently, `baseUrl` is set to `/pulsometer`.

## Making changes

Here are the important files:

- package.json
- vue.config.js
- public/manifest.json
- public/index.html
- src/App.vue

The icons of the app are in public/img/icons.

All those are configuration files except src/App.vue, which contains the core of the application.

The app folder is specified in 'baseUrl' of vue.config.js.

## Hosting

A progressive web application needs to be hosted on a https website. Https can be added for free
using letsencrypt: https://letsencrypt.org/getting-started/ https://certbot.eff.org/lets-encrypt/ubuntuxenial-apache

For apple, iOs >= 11.3 is required for progressive web apps to function properly.

## Icons

A command-line file called ./convert.sh enables creating all the icons from the icon given in argument.

You need to install imagemagick for the file to work.