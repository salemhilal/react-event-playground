# Brunch + React + Babel/ES6

This is a modern JS skeleton with React, Redux, and TypeScript for [Brunch](http://brunch.io).


## Installation

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
* Clone this repo manually
* Build and install by running:
    * Brunch plugins and app dependencies: `npm install`
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * Optionally, `npm run build` — builds minified project for production


## Patterns

* `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
* Place static files you want to be copied from `app/assets/` to `public/`.
* [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
