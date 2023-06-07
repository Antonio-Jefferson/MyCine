
# MyCine

This is a project developed in React that simulates an online movie box office, providing users with the possibility to buy tickets in a practical and convenient way.

## Installation

How to run the project on your machine:
```bash
  git clone git@github.com:Antonio-Jefferson/MyCine.git
```
Open the file:
```bash
  cd folder-name
```
install the dependencies:
```bash
  npm install
```
run the project:
```bash
  npm start
````
Abra o aplicativo no navegador em http://localhost:3000
## 🛠 Skills
The MyCine mobile site project will be implemented using the following technologies:
- HTML
- JavaScript
- Node
- React
- Styled-Component
- React-Router
- Axios
- Figma.


## Features

##### Choice of Movie ("/" route):
- Search for movie information through the provided API and display it according to the provided layout. When clicking on a movie, the user is redirected to the "/sessoes/:idFilme" route, where :idFilme is the id of the selected movie.

##### Session Choice (route "/sessoes/:idMovie"):
- From the movie id in the URL, obtain the sessions available for the movie from the API and display them according to the provided layout. the chosen session id.
##### Seat Choice (route "/assents/:idSessao"):
- From the session id, fetch the session data from the API and display the layout as provided. Allow the user to select and deselect available seats. Display an alert if the user tries to select an unavailable seat. Allow the user to enter the name and CPF of the buyer. When clicking on "Reserve seat(s)", the request is sent to the server and the user is redirected to the "/success" route. Selected seats are unavailable for other bookings.

##### Baseboard:
- Display a footer on the Session and Seat screens with the selected movie information, obtained from the API.

##### Success (route "/success"):
- Display a layout as provided, showing the order data made by the user. When clicking on "Back to Home", the user is redirected to the initial route ("/"), with the request reset.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Deploy
link: https://mycine-mauve.vercel.app/



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]()
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/antjefferson/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ant_jeff_)

