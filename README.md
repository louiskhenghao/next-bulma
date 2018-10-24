# NextJs Starter

> A Starter project for `nextJs` with Bulma CSS framework.

## Demo
https://codesandbox.io/s/github/louiskhenghao/next-bulma

## How to run app

### Run development build

```bash
yarn
yarn dev
```

### Run production build with:

```bash
yarn build
yarn start
```

### Export as static HTML files

```
yarn build
yarn export

# To try on your local machine
# note: you'll need to install https://github.com/zeit/serve
cd out
serve -p 8080
```

# Folder structure

```
/config
  - index.js
/components
  - YourComponent.js
/pages
  - YourPage.js
/screens
  - /YourScreenComponent
    - index.jsx
    - styles.jsx
/styles
  - theme.scss
  - styles.scss
```

- `components` folder is the place for your component.
- `pages` folder is the place for pages to be served, by default nextJs will consume the js file as page route, (Example: there is a `mypages.js` file under `pages`, so to access this page i just go to `http://localhost:3000/mypages`)
- `screens` folder is the place for pages component, each page component will have a component and its styles, the purpose to having these due to some people would love to seperate style and component in different files **_(This is optional)_**
- `styles/theme.scss` - this is the place where we import bulma theme, you can choose to define what you need to use for your application
- `styles/styles.scss` - this file is to define global styles for your application
