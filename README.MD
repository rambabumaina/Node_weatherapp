# Install Node on your System
1) Install node
2) Install npm OR Install yarn
3) Install nodemon : npm install --save-dev nodemon

# How to Run application in local
 npm run dev

 
# How to Deploy on heroku server 
1. Application url: https://ram-weatherapp.herokuapp.com/
2. heroku login
3. heroku keys:add  => TO add ssh key
4. Heroku create ram-weatherapp => To create app in heroku
5. heroku config:set key=value  => To set the key values for config
6. heroku config => To check env variables 
7. heroku config:unset key => TO Remove the envirinment variable
8. git push heroku master => To deploy the app in heroku

# Remote Mongo Config
heroku config:set JWT_SECRET=weatherapp SENDGRID_API_KEY=SG.nWaEuhn4TfaVQBlpWhNz8Q.Sk-qQaQNNHOaUiWqkqo2SXRNNsNFpeH2Rnqp-0qrjMo
heroku config:set MONGODB_URL="mongodb+srv://rammaina88:Brezza4148!@cluster0.pfol9.mongodb.net/weatherapp?retryWrites=true&w=majority"

Start point of app is package.json
  "scripts": {
    "start": "node src/app.js"
  }


# Node Commnds needs to be run
1)npm uninstall -g nodemon : To unistall package globaly in your machine
2)npm uninstall -g nodemon : To install Package galobaly
3)npm install nodemon@2.1.2 --save-dev : To install Package within the project



# MonogDB Start Command in local:
Install mongo DB locally then septup below 

"C:\m-db\mongodb\bin\mongod.exe" --dbpath="C:\m-db\mongodb-data"
"D:\RAM\mongodb\mongodb\bin\mongod.exe" --dbpath="D:\RAM\mongodb\mongodb-data"

## Db Dependencies:
 npm install mongodb --save
 npm install mongoose

Mongodb Atlus:
userName: rammaina88
Password: Brezza4148!
connection string : mongodb+srv://rammaina88:<password>@cluster0.pfol9.mongodb.net/test


# LOCAL DB CONFIG: 
Create config folder under projet and create dev.env under config folder.
PORT=3000
SENDGRID_API_KEY=SG.nWaEuhn4TfaVQBlpWhNz8Q.Sk-qQaQNNHOaUiWqkqo2SXRNNsNFpeH2Rnqp-0qrjMo
MONGODB_URL=mongodb://127.0.0.1:27017/weather-stock-app
JWT_SECRET=weatherapp


## ENV-CMD
 Install env-cmd module to read the ENV variables
 npm i env-cmd --save-dev
