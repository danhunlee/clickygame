# ClickyGame

This is a webiste application game that tests the users' mermory by having them click on images. 

## Getting started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. 

### Prerequisites
1. Node.js must be installed on local machine or host. See https://nodejs.org/en/download/ for instructions.
  
### Overview

1. This application is a game which renders different images to the screen. The objective of the game is to click on every image only once.
2. Each time an image is clicked the images are randomly placed on the screen.
3. The application keeps track of the user's score, incrementing the score by 1 for every image selected for the first time.
4. The game is over if the user selects the same image more than once. In this case the images are shuffled, the score is reset to 0 and the score is recorded as the top score if it is the highest score gotten by the user.

### Installing

1. To install source files use git to clone files from https://github.com/danhunlee/clickygame.
2. In a bash terminal or Visual Code terminal navigate to the directory that you downloaded the files from github.
3. Install the Node package (express) by entering the following in the terminal:   
    *npm install* 
4. (optional) If deploying to github follow the instructions in the following link: https://facebook.github.io/create-react-app/docs/deployment
   
### Operation
To view Clicky-Game page navigate to https://danhunlee.github.io/clickygame/.
The Clicky-Game app can be operated on the local host as instructed below.
1. Using a browser navigate to the main page:   
2. Click on any image, with the object to click on all images only once.
## Running the tests

Validation of Click-Game app was perform using a chrome browser. Clicky-Game app was run as directed in the previous section - **Operation**.  

### Break down into end to end tests

Source files have been extensively tested by displaying pages in Visual Code.

## Deployment

Navigate to https://github.com/danhunlee/clickygame to clone.

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Authors

* **Heon Lee**

## License

This project is not licensed.

## Acknowledgments
* Joe Rehfuss
* Trae Shanks
* Lan Truong




<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
