//All important commands

/*
 To start the server in local
 npm run dev
*/

/*****************************************
HEROKU:
heroku login
heroku keys:add  => TO add ssh key
Heroku create ram-weatherapp => To create app in heroku
heroku config:set key=value  => To set the key values for config
heroku config => To check env variables 
heroku config:unset key => TO Remove the envirinment variable
git push heroku master => To deploy the app in heroku
-----
heroku config:set JWT_SECRET=weatherapp SENDGRID_API_KEY=SG.nWaEuhn4TfaVQBlpWhNz8Q.Sk-qQaQNNHOaUiWqkqo2SXRNNsNFpeH2Rnqp-0qrjMo
heroku config:set MONGODB_URL="mongodb+srv://rammaina88:Brezza4148!@cluster0.pfol9.mongodb.net/weatherapp?retryWrites=true&w=majority"

Start point of app is package.json
  "scripts": {
    "start": "node src/app.js"
  }

************************************
Node Commnds:
1)npm uninstall -g nodemon : To unistall package globaly in your machine
2)npm uninstall -g nodemon : To install Package galobaly
3)npm install nodemon@2.1.2 --save-dev : To install Package within the project


**************************************
MonogDB Start Command in local:
"C:\m-db\mongodb\bin\mongod.exe" --dbpath="C:\m-db\mongodb-data"
"D:\RAM\mongodb\mongodb\bin\mongod.exe" --dbpath="D:\RAM\mongodb\mongodb-data"

Db Dependencies:
 npm install mongodb --save
 npm install mongoose

Mongodb Atlus:
userName: rammaina88
Password: Brezza4148!
connection string : mongodb+srv://rammaina88:<password>@cluster0.pfol9.mongodb.net/test

###################################
LOCAL DB CONFIG: 
Create config folder under projet and create dev.env under config folder.
PORT=3000
SENDGRID_API_KEY=SG.nWaEuhn4TfaVQBlpWhNz8Q.Sk-qQaQNNHOaUiWqkqo2SXRNNsNFpeH2Rnqp-0qrjMo
MONGODB_URL=mongodb://127.0.0.1:27017/weather-stock-app
JWT_SECRET=weatherapp

 ************
 ENV-CMD

 Install env-cmd module to read the ENV variables
 npm i env-cmd --save-dev

*/
