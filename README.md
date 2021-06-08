# Project Structure

- This project is using the mainstream create react app by facebook as a base 
- The code is currently deployed using surge.sh at endpoint: http://rapid-drain.surge.sh/ 
(I have kept it http as the websocket is connection is on http so it will throw mix content error if you try running the frontend on https, so to make frontend work on https we need to have wss instead of ws)
- The time taken to built it was 6.5 hrs & 2 hrs for refinement and UI/UX enhancements
and 20 mins for deployment
- I have used npm package [recharts](https://www.npmjs.com/package/recharts) for graphs/charts in the project 
- Web socket url is being injected via .env file, its not pushed on repo to run it locally create .env file and add the socket value to env variable REACT_APP_WEBSOCKET_URL: "<ws url comes here>"
- All the utility/shared code belongs under utils folder
- Constant has all the static values of data 
- Components as Usual contains the main component i.e. AirQualityMonitor.tsx which then imports child components Table.tsx & Graph.tsx , that's for maintaining the modularity & separation of concerns in the codebase




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
