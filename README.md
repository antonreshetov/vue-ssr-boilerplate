<p align="center">
  <img src="./src/assets/logo.png" width="100px">
</p>
<h1 align="center">Vue SSR Boilerplate</h1>

A fork of [vue-cli-ssr-example](https://github.com/eddyerburgh/vue-cli-ssr-example) that adds some additional functions.

## Features

### Server Side Rendering

- Vue + vue-router + vuex working together
- Server-side data pre-fetching
- Client-side state & DOM hydration
- Route-level code splitting

### Progressive Web App
- App manifest

## Usage

Install dependencies:

```
yarn
```

Start dev server:

```bash
yarn serve
```

Build for production:

```bash
yarn build
```

Start production server:

```bash
yarn start
```

## Docker

Build & run

```bash
docker-compose up --build -d
```

## Roadmap
- [ ] Service worker
- [ ] Update readme