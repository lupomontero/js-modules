# Breve historia de los sistemas de módulos en JavaScript

## Índice

* [Preámbulo](#)
* [¿Por qué módulos?](#)
* [1991-1995: Prehistoria](#)
* [1995-2001: 1era guerra de los browsers](#)
  - [Ejemplo: Global party](#)
* [2001-2006: La era oscura](#)
* [2006-2009: Coming together... jQuery, YUI, Dojo...](#)
  - [Ejemplo: Clausuras e IIFEs](#)
  - [Ejemplo: jQuery plugin?](#)
* [2009-2015: Node.js, NPM, CommonJS, Require.js, AMD, UMD, ...](#)
  - [Ejemplo: AMD, CommonJS, UMD](#)
  - [Ejemplo: Node.js y NPM](#)
* [2015-present: Webpack, ES Modules](#)
  - [Ejemplo: Bundlers (webpack)](#)
  - [ES Modules](#)
* [Cronología](#)

***

## Preámbulo

![battle](./battle.png)

JavaScript, como lenguaje de programación, es conocido por tener una barrera
de entrada relativamente baja, dado su carácter dinámico y laxo. Al mismo tiempo
es un lenguaje que esconde un montón de _quirks_ y cosas raras producto de una
historia cuanto menos peculiar.

## ¿Por qué módulos?

* Encapsulación (scope, namespaces)
* Reuso
* Arquitectura
* Colaboración (ecosistema)

## 1991-1995: Prehistoria

## 1995-2001: 1era guerra de los browsers

## Cronología

### 1991

* Nace la **WWW**. 1er navegador y servidor web de Tim Berners-Lee. (HTML, URL,
  HTTP, ...)
* Linux. Python.

### 1992

* [**libwww**](https://en.wikipedia.org/wiki/Libwww), https://github.com/w3c/libwww/commit/edb73538ebd51aa92e7bbebcad16d1f74ec093fb
* Unix browsers: Line Mode, Viola, ...

### 1993

* **Mosaic** (NCSA)
* Lynx, ...

### 1994

* 1 octubre: Formación de [**W3C**](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium).
* 15 diciembre: Sale [**Netscape Navigator**](https://en.wikipedia.org/wiki/Netscape_Navigator). (Marc Andreessen ex-Mosaic engineer)

### 1995

* **Intenet totalmente privatizada** por 1era vez. No más financiación del
  gobierno de EEUU.
* **AOL** y Prodigy comienzan a ofrecer conexión a internet.
* **Internet Explorer**
* **JavaScript**
* PHP, Java, Ruby.

### 1996

* 17 diciembre: 1era versión de **CSS**.

### 1995 - 2001: 1st browser wars

* **Netscape vs Internet Explorer**
* Win95 (Plus!)
* > "First browser war ended with Internet Explorer having no remaining serious
  > competition for its market share. This also brought an end to the rapid
  > innovation in web browsers; until 2006, there was only one new version of
  > Internet Explorer since the version 6.0 release in 2001."
  > https://en.m.wikipedia.org/wiki/Browser_wars

### 1997

* Primera edición de [**ECMAScript**](https://en.wikipedia.org/wiki/ECMAScript).

### 2004

* 4 junio: Formación de [**WHATWG**](https://whatwg.org/)

### 2005

* Marzo: 1er release de [**Dojo**](https://dojotoolkit.org/).

### 2006

* 25 enero: 1er plugin de [**jQuery**](https://jquery.com/)
* 25 febrero: 1er release público de [**YUI**](https://clarle.github.io/yui3/) (`YUI.use()`)
* 26 agosto: 1er release de [**jQuery**](https://jquery.com/) (John Resig)

### 2007

* Blog post de Eric Miraglia (de YUI): _Module Pattern in JavaScript_.

### 2008

* Mayo: Publicación de _JavaScript: The good parts_ de Douglas Crockford.

### 2009

* Enero: Kevin Dangoor, ingeniero de Mozilla, comienza [**CommonJS**](https://en.wikipedia.org/wiki/CommonJS).
  > "The CommonJS group defined a module format to solve JavaScript scope issues
  > by making sure each module is executed in its namespace. This is achieved by
  > forcing modules to explicitly export those variables it wants to expose to
  > the “universe,” and also by defining those other modules required to
  > properly work."
  > — Webpack Docs
* 24/25 abril: 1era [JSConf US](http://2009.jsconf.us/)
* 27 mayo: 1er release [**Node.js**](https://nodejs.org/).
* 7/8 noviembre: 1era [JSConf EU](https://www.jsconf.eu/2009/speakers.html)

### 2010

* 19 febrero: 1er release público de [**Require.js**](https://requirejs.org/) (0.8.0)
* 12 marzo: Blog post de Ben Cherry: _JavaScript Module pattern in-depht_.
* 1 junio: Blog post de Alex Sexton: [_How, When, And Why Script Loaders Are Appropriate_](https://docs.microsoft.com/en-us/previous-versions/msdn10/hh227261(v=msdn.10))
* 15 Nov: Blog post the Ben Alman: [_Immediately-Invoked Function Expression (IIFE)_](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), https://gist.github.com/cowboy/4710214

### 2011

* 6 marzo: [_Using JavaScript closures to create private scopes_](https://lupomontero.com/using-javascript-closures-to-create-private-scopes)
* 27 marzo: [_A first look at the upcoming JavaScript modules_](https://2ality.com/2011/03/first-look-at-upcoming-javascript.html)
* 18 octubre: [**Require.js**](https://requirejs.org/) 1.0.0
* 21 octubre: [**UMD (Universal Module Definition)**](https://github.com/umdjs/umd)
* 27 octubre: **Dojo** 1.7.0 introduce [**AMD**](https://en.wikipedia.org/wiki/Asynchronous_module_definition) a Dojo.

### 2012

* Blog post de Addy Osmani: [_Writing Modular JavaScript With AMD, CommonJS & ES Harmony_](https://addyosmani.com/writing-modular-js/)
* Junio: **CSS3**: mediaqueries recommendation.

### 2014

* 19 febrero: 1er release de [**Webpack**](https://webpack.js.org/)
* 28 octubre: **HTML5**

### 2015

* **ES6**.

***


Script loaders??

Notable mentions?

Motools, Backbone, Underscore, Ember, Angular, React, Vue, ... Express

* https://github.com/amdjs/amdjs-api/wiki/AMD
* https://gist.github.com/jrburke/1262861
* https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/

***

## Ejemplos de código

1. Global party
2. Closures

   https://lupomontero.com/using-javascript-closures-to-create-private-scopes

3. AMD/UMD

   https://github.com/umdjs/umd

4. Require.js
5. CommonJS
6. Node.js
7. NPM
8. Bundlers
9. ES Modules