# Create and publish a new app

Created by Martijn

_If there is anything missing please let me know._

## Requirements

- Expo account https://expo.dev
  - with access to the ecBase team
- Github account
  - with access to the ecBase team
- EAS command line interface - https://github.com/expo/eas-cli
- (iOS) Apple developer account
  - with access to the ecBase team
- (Android) Play Console developer account
  - with acces to the ecBase team

## Android app setup

1. Go to: https://play.google.com/console/u/0/developers/5637856893674630090/app-list
2. Click create app
3. Follow all the steps on the dashboard under "Set up your app"
   1. Privacy policy template can be found here and should be placed in /templates/<--project-->/
      - https://app.ecbase.nl/templates/demo-agf/Privacyverklaring_demo.html
   2. Fill in a valid test login for the google team under "App access"
   3. Create and upload all the screenshots, icons, etc.
4. Run `yarn build:android`
   - make sure to select the ecBase team
5. Download the file from expo and upload it under -> Release -> App bundle explorer
6. Go to Release -> Production, click "Create new Release", select the build, click next & submit for review.

## iOS app setup

1. Create a production build by running `yarn build:ios`
   - Login with your developer account **(must be part of organization's team!)**
   - (iOS) IMPORTANT: Make sure to select the **team of the organization** to publish under otherwise you will not be able to upload the app.
2. Go to https://appstoreconnect.apple.com and login with your developer account.
3. Go to apps and click + to create a new app (not app bundle)
4. Insert all the data and select the Bundle ID (created and uploaded by expo/eas when running the build command)
5. Click "create"
6. Fill in all the necessary information of the app. If you are unsure what to fill in, try to submit the app and it will show you.
   - Screenshots can be made with the Simulator App on MacOS.
   - Privacy policy should be done as described on 3.1 at Android app setup (in this document)
   - Make sure to fill in a valid login for Apple to test the app under the iOS App dashboard -> App Review Information
7. Resubmit when everthing is filled in.
8. Get a snack and pray that Apple approves your build.
