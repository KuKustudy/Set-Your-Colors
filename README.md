# 🎨 Set Your Colors 🎨
This web app is a simple color picker tool that helps you find a good match of text color
and background color. You can change the background/text color by entering a
hex code (e.g. #c84e2b).

This web app use React.js as front-end, and did not use backend framework and 
database. All codes are stored in the src/App.js file.

This web app is now deployed using GitHub Pages, and serving at 🍕🍕 https://kukustudy.github.io/Set-Your-Colors/ 
<br/><br/>

## To run this app in development mode
  clone this repository, cd to the project folder and run the following command in terminal
  `$ npm start`
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.
  
<br/>

## GitHub Page deployment steps:

**1. open terminal, and go to the app folder using the cd command**

   `$ cd Set-Your-Colors`
</br>

**2. install gh-pages npm package (use the 2.0.1 version of gh-pages here because the latest version of gh-pages might throws the 'Error: spawn E2BIG at ChildProcess.spawn...')**

   `npm install gh-pages@2.0.1`
</br>

**3. open and edit 'package.json' file**

   (a) add the url of deployed website to the top of json file
   
   `"homepage": "https://kukustudy.github.io/Set-Your-Colors/"`
   
   (b) add a predeploy and deploy instruction/command inside "scripts", like below
   
     "scripts": {
    "start": "react-scripts start",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
    }

   (c) commit your local change
   
    $ git add .
   
    $ git commit -m "added deployment configuration"
    
    $ git push -u origin main

   


**4. run following command in your terminal**
   `$ npm run deploy`


**5. Go to your project's GitHub repository, go to "Setting"/"Pages"**
     
  Configure the "Build and deployment" settings like this:
  Branch: gh-pages
  Folder: / (root)

 😺😺😺 ALL DONE! You should be able to see your React App deployed!

   
