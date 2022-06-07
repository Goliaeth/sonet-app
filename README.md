# Timeline:

Project created using **“Create React App”**.\
For styling, it was decided to use **CSS Modules in React**.\
Routing in the application. **“react-router”** library.\
Creating project structure: **UI – BLL – DAL**.\
Trying **Redux**.\
Creating my own state management "like Redux" (store + reducers + dispatch + callbacks for subscribing on store changes).\
Learning what **refs** are in React.\
Learning **FLUX**. Started using FLUX in a project.\
Adding original **Redux** to project => refactored code for Redux.\
Trying **React.createContext()** - context, Provider/Consumer.\
Adding **“react-redux”** to project.\
Making **Container Component** and **Presentation Component**.\
**REST API**. Trying fetch().\
Adding **“axios”** to project.\
Making some **components class-based**. Learning **local state** and **lifecycle methods** (componentDidMount(), componentDidUpdate(), componentWillUnmount()).\
Adding pagination (making reusable components).\
Adding preloader.\
Adding authReducer.\
Adding axios instance with common request settings (e.g. API-KEY, ...).\
Adding **“redux-thunk”** to project.\
Trying **HOC**. Adding some HOC’s. Start using **compose() from “redux”**.\
Adding **“redux-forms”** to make working with forms easier. Implementing a form using “redux-form”.\
Deleting “redux-forms”.\
Adding **“react-final-form”** to project. Migrated all forms to “react-final-form”.\
Adding **field-level validations for forms**.\
Adding login/logout functionality using API.\
Adding login errors returned from server to “react-final-form”.\
Adding app initializing at application start.\
Adding **selectors** to mapStateToProps().\
Using **“reselect”** library.\
Trying **React Hooks**. Making some components functional.\
Optimization: **VirtualDOM, ShouldComponentUpdate(), memo**.\
Learning **PureComponent**\
Trying unit tests with **“jest”**. Adding test suit with some tests for reducer. Trying to test components in React. Adding **“react-test-renderer”**. Adding some tests for ProfileStatus component.\
Trying **“redux-ducks”**.\
Adding profile photo-file uploading to server via API.\
Adding captcha from server when login failed.\
Adding errors handling **try/catch**.\
Adding **“classnames”** library.\
Trying **React.lazy(),      <Suspense fallback={}>**.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
