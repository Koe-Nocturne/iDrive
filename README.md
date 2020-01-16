# iDrive Formula
 
## Summary

iDrive formula is a mobile app used to calculate scan delay in MRI machines. This was an exercise in creating my first React Native App from scratch. It is a simple calculator that takes three inputs and gives a result.
 
This was also my first time using React Hooks in general and in forms. 
 
 
This repo is missing the main formula which is the file, './src/env.js.' The only requirement is the export default and take in three arguments on the formula. An example of code that can go in the file is: 
```javascript
export default function Formula(peakTime, scanTime, injectionVol) {
  // eslint-disable-next-line prettier/prettier
  return +peakTime + +scanTime + +injectionVol;
}
```
It is important to note the values of the parameters are strings so any variables will need to be converted into a number.

## What the App Looks Like on IOS
Before entering in values:

![IOS before input](/src/images/AndroidBefore.png){:height="50%" width="50%"}
After entering in values:

![IOS after input](/src/images/AndroidAfter.png){:height="50%" width="50%"}

## What the App looks like on Android
Before entering in values:

![Android before input](/src/images/IOSBefore.png){:height="50%" width="50%"}
After entering in values:

![Android after input](/src/images/IOSAfter.png){:height="50%" width="50%"}

## Running the project
The instructions assume you have installed the proper [React Native Tools](https://facebook.github.io/react-native/docs/getting-started) installed as well as [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](https://www.google.com/search?q=npm+installation+instuctions&oq=npm+installation+instuctions&aqs=chrome..69i57j33.4406j0j4&sourceid=chrome&ie=UTF-8).
 
 
1. Clone this project
    ```
    git clone < project-url.git >
    ```
 
2.  Npm install requirements to download software for the app.
    ```
    npm i
    ```
3. Create the env.js file as listed in the summary.

## IOS steps
1. Change directory to ios and install Cocoapods.
    ```
    cd ios/
    pod i
    ```
 
2. After installing pods change directory and run ios simulator.
    ```
    cd ..
    react-native run-ios
    ```

 
## Android steps
1. Launch a virtual android device (through Android Studio for instance)
    If you have never installed any android virtual device, follow those instructions
 
2. Then, run the project in executing on your project folder:
    ```
    react-native run-android
    ```



 


