# MyTinerary

## How to start

* Install NodeJS https://nodejs.org/es/download/
Linux: 
  Make sure you are running the lastest version of node (12), if not npm will fail.
  node --version
  Or to install it, run:
  ```sh
  curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  ```

* Complete the configuration by creating config folder & config.js file in root  ``./config/config.js`` (check Config file example section).

* Install dependencies:
  ```sh
  cd client
  Windows:
    npm install
  Linux:
    sudo npm install
  cd ..
  Windows:
    npm install
  Linux:
    sudo npm install
  ```
* Start:
  ```sh
  npm run dev
  ```

* The images folder has been uploaded so you can view the project correctly

* The project is under development, please use the city "Barcelona" to test the itineraries page, is the only one with data to show

## Config file example:
```js
module.exports = {
  mongoURI: '',
  port:  process.env.PORT || 5000,
  secretOrKey: "",
  googleCredentials: {
    ID: "",
    secret: "" 
  }
};``