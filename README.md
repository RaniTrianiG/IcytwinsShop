# Description

This Codebase using React Native 0.61.5 with gradle 6.5

## Navigation

Codebase with **React Native Navigation from Wix** for navigating between screen/activity. Make sure to read documentation for a better usage (https://wix.github.io/react-native-navigation/docs/basic-navigation)

# Preparation & Running

- Clone project
- Copy .env-example and rename copied one with .env and fill with necessary environment setup
- Run `npm install`
- Runing App on Device/Emulator (Make sure to connect your devices or emulator and it's runing)
  - Open terminal/cmd run `npm start`
  - Open new tab or window terminal/cmd run `react-native run-android`
- Use https://github.com/jhen0409/react-native-debugger for better debugging.

# Testing

- Run `npm test`
- Run `npm run test:cover` for coverage
- Run `npm run test:cover -- -u` for coverage and update snapshot
- Open file from directory `./coverage/lcov-report/index.html` in browser
