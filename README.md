<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="src/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Debonair Software</h3>

  <p align="center">
    Debonair Software aim's to deliver an web application that allows users to find facts that other's share and verify and utilize them.
    <br />
    <a href="https://github.com/chrisuga/group-12-final-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://APPPPPPPPP.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/chrisuga/group-12-final-project/issues">Report Bug</a>
    ·
    <a href="https://github.com/chrisuga/group-12-final-project/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#Linting">Linting</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


As a group, our goal is to deliver an app that would combine the structures of open source research with an interactive/ subscription based framework that would allow a user to access multiple resources through a search point. The concept of this app will not only be resourceful but interactive through the user’s ability to input information that the user finds interesting, useful, resourceful, etc. into the app.



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Flask](https://flask.palletsprojects.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Heroku](https://www.heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started you will need to install some frameworks. The frontend of our website was written in React to display user interfaces in a visually appealing way. The code that powers the backend of our website is in Python, using Flask. Flask Login will be used to manage user sessions. The app is deployed using Heroku. Heroku will also be used to storet he database using Heroku Postgres. Flask SQLAlchemy will be used to create the database models. The Zomato API is used to find restaurants based on a user’s location, and the Edamam Recipe API to find recipes given the user's input of ingredients.


### Prerequisites

You will need to install the following on your host before deployment
* npm
  ```sh
  npm install npm@latest -g
  ```
* python3
  ```sh
  npm install python3@latest -g
  ```

### Installation

1. Get a free Email API Key at [https://www.yelp.com/developers](https://www.yelp.com/developers)
2. Setup a Heroku repository [https://www.heroku.com/](https://www.heroku.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/naimam/4350-Group-11-Project.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. NPM run build    
    ```sh
    npm run build
    ```
6. Enter your API in `.env`
7. Install Python libraries 
    ```sh
    pip install -r requirements.tx
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can use this webapp to post facts and verify other's facts. You can also discover new facts to learn for yourself.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

As a regular user, I should be able to verify my identity with an email authentication system, so I can be confident my reputation isn’t sullied by ne’er-do-wells.
The app should present a proper webpage where a visible login button is visible on the top right corner.
When the client interacts with the login button by clicking on it, the client should be able to sign in to their account by inputting a proper username and password. 
If the username and password is accepted by the system the client’s username will be displayed on the upper right hand corner.
If the username and password is rejected or does not match any in the database, the client will receive an error message and will be redirected to the login page.
Client’s username will automatically be set as the email address. 


As a regular user, I should be able to submit a piece of information I want to share, along with a corresponding source, so that I can inform other users of interesting things I know.
On the app page the client will have the ability to submit pieces of information through comments as well as upload links to their sources.
The app page should display two different blocks where one on the left will be titled as “Interesting Information Submission”  and the corresponding right block will display “Source Link”. 
A “Submit” button must be properly functional below the two blocks in order for the client to successfully submit their documentation to the server. 
After every user’s submission, the app screen should display a message that informs the client that their “Submission is in Progress”. 
The app should also be able to cancel a submission. 

As a regular user, I should be able to receive an email notification when my submitted facts have been reviewed, so I can know I’m making a contribution to the app.
Once the client has been properly logged in and submitted information for the category, the app should send a log to their email concerning their submission.
When the user’s fact is verified and added to the rotating fact list, there should be a corresponding email that lets the user know.
If the fact is rejected, an email should be sent letting the user know why their submission was not accepted.
There should be a link in the email to the web app so the user can see their fact in the rotation.
The user’s profile page should update to include the recently verified fact.


As a regular user, I should be able to view a rotating selection of facts, so that I can choose to entertain myself with unfamiliar snippets of info.
When the app is opened a display of facts should appear.
The client should be able to interact with the app by clicking on an arrow to the right side of the screen to see different facts appear.
The most recent displayed facts should be stored and reviewable if the user decided to click an arrow on the left side of the screen.
On the card displaying the fact, there should be a reference to a source also submitted by the user.
The cards displayed should have the capability of being interactive by allowing the client to see other cards that share similarities with it. 


See the [open issues](https://github.com/chrisuga/group-12-final-project/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Linting -->
## Linting





<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Javed Usman [(ujaved1@student.gsu.edu)](mailto:ujaved1@student.gsu.edu)
Phan Henry [(hphan19@student.gsu.edu)](mailto:hphan19@student.gsu.edu)
Uga Christopher [(cuga1@student.gsu.edu)](mailto:cuga1@student.gsu.edu)
Yen Andrew [(ayen4@student.gsu.edu)](mailto:ayen4@student.gsu.edu)

Project Link: [https://github.com/chrisuga/group-12-final-project](https://github.com/chrisuga/group-12-final-project)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments



<p align="right">(<a href="#top">back to top</a>)</p>


