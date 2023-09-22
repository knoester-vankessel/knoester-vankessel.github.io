# How to fork, build and release a new app

Created by Martijn

_If there is anything missing please let me know._

## Requirements

- Expo account https://expo.dev
  - with access to the ecBase team
- Github account
  - with access to the ecBase team
- EAS command line interface - https://github.com/expo/eas-cli
- Flipper https://fbflipper.com/
- (iOS) Apple developer account
  - with access to the ecBase team

## Fork the repo

1. Go to https://github.com/knoester-vankessel/ecbase-starter-app
2. Click Fork on the top right -> create new Fork.
3. Select owner knoester-vankessel, fill in repo name, click Create fork (only master branch)
4. Clone the app with Github Desktop
5. Run `yarn` (may take some time)

## Update project specific files

1. Open app.config.js
2. Update the bundleID and bundleName and slug to a unique value (make sure the bundleID is available on both ios and android). **Update only the "demoagf" part of the bundle ID.**

```ts
const bundleID =
  process.env.APP_MODE === "production"
    ? "com.ecbase.demoagf.app"
    : `com.ecbase.demoagf.${process.env.APP_MODE}.app`;

const bundleName =
  process.env.APP_MODE === "production"
    ? "ecBase Demo"
    : `ecBase Demo (${process.env.APP_MODE})`;

export default () => ({
  expo: {
    name: bundleName,
    slug: "ecbase-starter-app", // <--
```

3. Delete expo.updates.url and expo.extra.eas property/value from app.config.js
4. Run `eas update:configure`
5. Update expo.updates.url and expo.extra.eas with the new values.
6. Update the { shop_name } translation in /i18n/en.ts & nl.ts
7. Create and update a 512x512 icon.png and overwrite it in /assets/icon.png & adaptive-icon.png
8. Create and update a 1284x2778 splash.png and overwrite it in /assets/splash.png
9. Create and update the X-SITE-TOKEN configured in ecbase.config.ts { ecBaseToken }

## Create a build

Build schema's are defined in eas.json and connected to Github branches to allow OTA updates (more on that below). To start developing, create a development build with `yarn build:dev:android` or `yarn build:dev:ios` (iOS simulator needs a dedicated development build with `yarn build:sim:ios`)

**PLEASE READ OS SPECIFIC DOCUMENTATION BELOW**

### Development

_internal only, DEMO database environment_

The development build is needed only for developers and features a fully functioning Expo Go app inside our own app, allowing for HMR, Dev-tools, etc.

**Receives no OTA updates.**

run `yarn build:dev:android` or `yarn build:dev:ios`

(iOS) IMPORTANT: select the ecBase org!

### Preview

_public via Expo QR code or link, DEMO database environment_

The preview app functions to quickly demonstrate new/updated functions with our team (or even a client)

**Receives OTA updates from the 'preview' branch.**

run `yarn build:preview:android` or `yarn build:preview:ios`

(iOS) IMPORTANT: select the ecBase org!

### Staging

_public via Expo QR code or link, PRODUCTION database environment_

The staging environment is there to test production api fixes/features without overwriting client apps.

**Receives OTA updates from the 'staging' branch.**

run `yarn build:staging:android` or `yarn build:staging:ios`

(iOS) IMPORTANT: select the ecBase org!

### Production

_only through AppStore or Play Store, PRODUCTION database environment_

Production builds can only be uploaded to the stores.

**Receives OTA updates from the 'production' branch.**

run `yarn build:android` or `yarn build:ios`

(iOS) IMPORTANT: select the correct organization!

## Publish the app to the stores

These are some basic steps and focusses on updating an existing app, there are a lot missing. Please refer to "Create new app" documentation.

_(iOS) you need access to the Apple organization team (read below)._

Run the Build production command.

- (iOS) make sure to select the right team.
- (Android)

After the build completes, download it from Expo

- iOS

  1. on your mac, open the Transporter app
  2. Select the correct team
  3. Drag & drop the file into the window
  4. Wait
  5. Go to Appstore Connect
  6. After the build finished processing accept it
  7. Create a new build in the app overview
  8. Add the build
  9. Send it for review

- Android
  1. Go to https://play.google.com/console/u/0/developers/5637856893674630090/app-list
  2. Select the app
  3. Go to Bundle explorer and upload the new binary
  4. Go to Release -> Production
  5. Create new release
  6. Select new build from library
  7. Publish the build

## Push an over-the-air (OTA) update

1. (Optional) If not already done, create an EXPO_TOKEN to allow OTA updates.
   1. Go to https://expo.dev/accounts/ecbase/settings/access-tokens
   2. Click create a new token and give it an identifiable name
   3. Copy the value
   4. Go to https://github.com/knoester-vankessel/---insert-repo-name---/settings/secrets/actions
   5. Create New repository secret with name EXPO_TOKEN and the copied value
2. Create a pull request from the branch you are working in to either preview, staging or production.
3. Apps with the correct sdkVersion will automagically receive the update.

## iOS builds

To be able to use the development build on iOS you need to be part of the Apple team and (re)build the app with your device added to the allowed list.

Someone with admin privileges of the team must:

1. Go to https://appstoreconnect.apple.com/login
2. After login go to Users & Access
3. Add your developer account with at least Developer Role and include Additional Resources "Access to Certificates, Identifiers & Profiles"

You should:

1. run `eas device:create`
2. Follow the steps.
3. (re)build the app.
