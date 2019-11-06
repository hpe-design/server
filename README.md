# hpe-server
[![Netlify Status](https://api.netlify.com/api/v1/badges/9b150011-1acd-47e3-8a8d-b6d4ea3e51bd/deploy-status)](https://app.netlify.com/sites/affectionate-leakey-6b1858/deploys)

React / Next.js

## Getting Started
```
git clone https://github.com/hpe-design/hpe-server.git
yarn install
```

Run in development mode:
```
yarn dev
```

Running in production mode:
```
yarn build
yarn start
```

Prep for deployment:
```
yarn deploy
```
Will first run tests, then build & export to the build directory `/out`.

## Netlify Config
Access site settings at https://app.netlify.com/sites/hpe-server/settings/deploys

### Build settings
Set the following under "Build Settings":
- Build command: `npm run deploy`
- Publish directory: `out` (Next.js equivalent to /dist)

### Deploy contexts
Production currently set at 'Master'
- Deploy previews: TBD
- Branch deploys: TBD

