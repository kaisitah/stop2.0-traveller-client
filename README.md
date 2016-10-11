[![Build Status](https://travis-ci.org/STOP2/stop2.0-traveller-client.svg?branch=master)](https://travis-ci.org/STOP2/stop2.0-traveller-client)
[![Coverage Status](https://coveralls.io/repos/github/STOP2/stop2.0-traveller-client/badge.svg?branch=master)](https://coveralls.io/github/STOP2/stop2.0-traveller-client?branch=master)

# stop2.0
Digital stop button for your mobile phone

https://ohtuprojekti.jamo.fi/topic_descriptions/147

#### Setup of development environment (UNDER PROGRESS) 

Download Node.js version 4 or newer.

Download Watchman

Install React Native:
```bash
npm install -g react-native-cli
```

Clone the latest version of the project. Inside the Stop2.0-traveller-client folder
```bash
npm install
```

Install react-native-slide-button v. 1.3.0 manually:
```bash
npm install https://github.com/sreejithr/react-native-slide-button/archive/v1.3.0.tar.gz
```

#### For Android development:

Download and install Android Studio: https://developer.android.com/studio/index.html

Open Android Studio -> configure -> SDK Manager -> Launch SDK Manager (or in command line: cd tools && ./android on android SDK folder) and install Android 6.0 and Android SDK Build-tools 23.0.3.

Set up Android keystore: Follow steps "Generating a signing key" and "Setting up gradle variables" at https://facebook.github.io/react-native/docs/signed-apk-android.html

Run in Android emulator:
Create new AVD (Android Virtual Device) with Android Studio or in command line: cd tools && ./android avd (on android SDK folder)
Start the emulator on Android Studio or in command line: cd tools && ./emulator -avd name_of_your_avd

Run in phone:
Unlock Developer Settings on Android: Settings -> About Phone -> Tap "Build number" 7 times and the Developer options will be unlocked and available
Enable Developer options and USB debugging: Settings -> Developer options -> Enable Android debugging
Connect the phone to PC with USB

Run the app (the app will run on the device if it's connected, otherwise it will run on the emulator):

In debug mode (shows errors & warnings):
```bash
react-native run-android
```

In production mode (hides errors & warnings):
```bash
react-native run-android --variant=release
```

### Recommended IDE
The recommended IDE is Atom (https://atom.io) with Nuclide (https://nuclide.io).

To install Nuclide for Atom:
```bash
apm install nuclide
```
Install Eslint support for Atom:
```bash
apm install linter-eslint
```
