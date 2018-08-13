# Developer-Assessment

In order to run this repository locally do the following:

* Run `git clone https://github.com/dbdoyle182/Developer-Assessment.git`
* Once navigated to the root directory of the folder run `npm run installDeps`
* Once the dependencies have loaded run `npm run start`
* The page should load once the react code has compiled successfully

## Running tests
(Tests are developed using Mocha, Chai and Nightmare)

* To run the unit tests on the API run `npm run unitTest` 
* To run the integration test run `npm run intTest`

## Design Notes

* This application is designed with React and using Redux to help manage the state of the application. The modals, forms and the username is stored in the redux store to ease the burden on the components.
* I have decided to use a central modal manager with Redux to allow any future modals to be implemented with ease.
* The design framework is Semantic UI, I've chosen this for the clean look the Semantic UI provides and it's compatibility with React.
* The Log In and Sign Up forms are provided in two different ways, I selected two of the more popular ways that I have seen log in and sign up forms presented in web applications, ultimately one would be selected but I wanted to provide options.
* The user page is simple and provides the data received from the API formatted and marked with icons. There are buttons provided on the userpage for the user to either change their password or to delete their account. 
* I have included on log in to check the authorization of the user to toggle between and signed in menu and signed out menu providing an easy way for the user to log out. With more content on the user page I have enabled the nav to follow the page as a user scrolls.

## Test Notes

* The unit testing checks the following api destinations POST (/admins/signup, /admins/auth), GET (/admins/{USERNAME}), PUT (/admins/logout/{USERNAME}) and DELETE (/admins/{USERNAME})

* The integration testing currently automates the signup procedure on page loading and checks to see if the page progresses to the login modal. I intend to add more integration testing if time allows. 




