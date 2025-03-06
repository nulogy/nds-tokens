# @nulogy/tokens

> This is where Nulogy's design tokens are stored and converted using [Style Dictionary](https://amzn.github.io/style-dictionary)

![npm (scoped)](https://img.shields.io/npm/v/@nulogy/tokens.svg)

## What are tokens?

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

- [Salesforce](https://www.lightningdesignsystem.com/design-tokens/)

## 📦 Installation

**⚠️ Note** that this package is primarily designed to be used by [@nulogy/components](https://github.com/nulogy/design-system/tree/master/components) and [@nulogy/css](https://github.com/nulogy/design-system/tree/master/css). You probably shouldn't be pulling this into an application, unless you need access to raw scss, css, or javascript values for some reason.

`yarn add @nulogy/tokens`

## ✨ Usage

After installing, you'll have access to three variable files:

- `nds_tokens.js` for javascript constants, used by @nulogy/components and converted into [theme](https://nulogy.design/theme) file
- `nds_tokens.css` for access to css variables
- `nds_tokens.d.ts` for TypeScript declarations

## 💬 Questions

- [#support-design-system](slack://channel?team=T024N2KKA&id=CBAFQ4X7X)
