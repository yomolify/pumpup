# Pumpup 
![pumpup](https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/image/318381-1505247817263.jpg)

----------

A React-Native mobile app for iOS and Android with a single code base, with local or remote Pumpup backends to choose from. [Demo](#screens)

## Installation

* [Install React-Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

### Install Pumpup
* Clone pumpup: `git clone https://github.com/yomolify/pumpup.git`

* Install dependencies
```
yarn
```

* Run app
```
yarn start
```

### Using Pumpup Api Server

#### Use the local or remote Pumpup Api Server
To make things easy for you, the `config.example.js` has been initialized to use the remote **Pumpup Api Server**.

This **Pumpup Api Server** can run either locally or using a remote URL. For your ease, a server is running at: [ http://api.pumpup.com]( http://api.pumpup.com)


#### The following commands are for the client

*  Copy the ```src/lib/config.example.js``` to ```src/lib/config.js```.  
* **Note**: the `.gitignore` includes `config.js` from being committed to GitHub
* **Note**: you must select either  `PumpupApiLocal` or `PumpupApiRemote` for the ```backend``` as shown below with `PumpupApiRemote` set as the default.

```
  backend: {
    PumpupApiLocal: false,
    PumpupApiRemote: true,
  },
```
* **Note**: The default is to run remotely on the **PumpupApiRemote Server** so there is nothing more to do if you want to use it! In that case, just use the `config.js` as is.

### To run:
* `yarn start` runs iOS by default. Platform specific instructions:
* For iOS, from the command line, run via command: ```react-native run-ios``` or open XCode and load project, Run ```Product -> Run (⌘+R)```
* For Android, from the command line, run via the command: ```react-native run-android``` assuming you have an emulator or device running and attached
* Enjoy!


## Screens

**Welcome Screen:**

![Welcome Screen](https://i.imgur.com/YFdzJvN.png)  

----------

**Read More:** 

![Read More](https://i.imgur.com/muqKdEa.png) 

----------

**Parsing Hashtags:** 

![Parsing Hashtags](https://i.imgur.com/ltpBeZq.png)

----------

**User Photos Slider:** 

![User Photos Slider](https://i.imgur.com/f7xRCzb.png)

----------

**Popular Photos Grid:** 

![Popular Photos Grid](https://i.imgur.com/3VmCCAK.jpg)

----------


## Tests
![Unit Tests](https://i.imgur.com/gLqVgd0.png)   

![Yay](https://formidable.com/static/835848ebbb0b5c0572711e2a887e38e0-0516f.jpg)

----------
