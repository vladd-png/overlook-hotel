## Welcome to Hotel Hyrule

### Ever Wanted to Spend the Weekend in the city of Hyrule? Well here's your chance.

## Introductions
This was the final project for Module two of Turing. We were given six days to build out an application that simulated booking a room through a hotel, either as a manager or a customer. As a class we shared a public API, where a user could pull down data and see all the available rooms for booking. They could select a date, filter by room type, and book a room which, if successful, sent a fetch request and updated the API. As a manager you would see all the available API data on the rooms. A manager could also book a room or remove a booking with different successfull fetch requests. A major learning goal for this project was to set up the codebase with inheritance classes and well developed logic across all the classes. 

![screenshot 1](https://user-images.githubusercontent.com/53594458/76690318-7231f380-6604-11ea-86e7-acec7ae63283.png)

## Setup

Feel free to pull down this repo, run `'npm install' `

To verify that it is setup correctly, run `npm start` in your terminal. Go to ` http://localhost:8080/. ` Enter ` control + c ` in your terminal to stop the server at any time.

For Logging in:

- To be a customer, use 'customer' + any # 1-50 with the password of 'overlook2019'
- To be a manager, use 'manager' with the password of 'overlook2019'

## Technologies Used
- HTML
- CSS
- JAVASCRIPT
- OOP
- CLASS INHERITANCE AND EXTENDS
- MOCHA / CHAI
- NPM


## Wins

- The application works
- Was able to sort out the API data and use it effectively with a FETCH request for the application
- Implemented SASS in the styles file, and successfully synced with WebPack
- Really focused on TDD for this project, starting with methods in classes, and testing fully
- Implementing spies on global or DOM elements in the MOCHA / CHAI testing suite

## Challenges

- Figuring out POST requests to the bookings API data
- Organizing the project around true OOP, for the first time
- Creating classes that ONLY deal with the data they hold
- Figuring out how to prioritize the requirements of the project. Seemed one path kept expanding into several other to-dos. 

## Future Iterations

- I want to clean up when I instantiate my bookings, frontdesk, and user class, because currently they are called in multiple places depending on when they are needed, instead of all at login
- I want to add an apology for when there is no bookings left for a certain day
- I want to show a message when a room is succesfully posted and booked
- I want to show a message if a fetch call fails

## Login Page
![alt text](https://media.giphy.com/media/TgruqCxRx72VDxPzcv/giphy.gif "Logo Title Text 1");

## User Reservation Page
![alt text](https://media.giphy.com/media/Kb4pRsR36SLdEG9354/giphy.gif "Logo Title Text 1");

## Manager Page
![alt text](https://media.giphy.com/media/SAN0FBs7RhO5dDShrw/giphy.gif "Logo Title Text 1");


