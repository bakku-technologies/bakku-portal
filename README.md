# absp-portal
___
## Dev Setup

After cloning the repo locally, follow the following steps:

##### Install MongoDB
Install with homebrew and system setup
```
$ brew install mongodb
$ mkdir -p /data/db
$ sudo chmod -R 777 /data/db
```
Now, to run
```
$ brew services start mongodb
```

##### NPM + Node.js Setup
Be sure that you're running node v8.4.0 and npm v5.6.0 (those are just what has been tested and not necessarily indicative of what is required)
```sh
$ cd absp-portal
$ npm install
$ npm start
```