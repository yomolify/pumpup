PumpUp 
==================================
A React-Native mobile app for iOS and Android with a single code base, with local or remote PumpUp backends to choose from

## Installation

* [Install React-Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

### Install Pumpup
* Clone pumpup: `git clone https://github.com/yomolify/pumpup.git`

* install dependencies

```
cd pumpup

yarn

yarn start
```

### Using PumpUp API Server

#### Use the local or remote PumpUp API Server
To make things easy for you, the `config.example.js` has been initialized to use the remote **PumpUp API Server**.

This **PumpUp API Server** can run either locally or using a remote URL. For your ease, a server is running at: [ http://api.pumpup.com]( http://api.pumpup.com)


#### The following commands are for the client

*  Copy the ```src/lib/config.example.js``` to ```src/lib/config.js```.  
* **Note**: the `.gitignore` includes `config.js` from being committed to GitHub
* **Note**: you must select either  `PumpUpAPILocal` or `PumpUpAPIRemote` for the ```backend``` as shown below with `PumpUpAPIRemote` set as the default.

```
  backend: {
    PumpUpAPILocal: false,
    PumpUpAPIRemote: true,
  },
```
* **Note**: The default is to run remotely on the **PumpUpAPIRemote Server** so there is nothing more to do if you want to use it! In that case, just use the `config.js` as is.

### To run:
* For iOS, from the command line, run via command: ```react-native run-ios``` or open XCode and load project, Run ```Product -> Run (⌘+R)```
* For Android, from the command line, run via the command: ```react-native run-android``` assuming you have an emulator or device running and attached
* To run tests, ```npm test```
* To debug MochaJS unit cases, install [node_inspector](https://github.com/node-inspector/node-inspector) and run ```npm run test-chrome```
* Enjoy!


----------


------------
