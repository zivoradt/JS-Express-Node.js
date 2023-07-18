# Client-Server Architecture with MVC Pattern
This repository contains a web application built using a Client-Server Architecture with the Model-View-Controller (MVC) pattern. The application is designed to provide a clear separation of concerns between the data (Model), the user interface (View), and the application logic (Controller).

# Installation
Before starting the application, ensure you have the following prerequisites:

Node.js (version 18 or higher) installed on your machine.
Git installed (optional, but recommended for easy cloning of the repository).

To install the application, follow these steps:
Clone the repository to your local machine:

• git clone https://github.com/zivoradt/JS-Express-Node.js.git<br>

Change into the project directory:

• cd your-repo<br>
Install the dependencies:

• npm install<br>

# Running the Application
Once the dependencies are installed, you can start the application using the following command:

npm start
This command will run the server.js file, which sets up the backend server and serves the web application. Once the server is up and running, you can access the application by navigating to http://localhost:3000 in your web browser.

# Project Structure
The project follows the MVC architecture, ensuring a clear separation of concerns:

• server.js: This file contains the code for setting up the backend server and handling the routing and middleware.<br>
• controllers/: This directory contains the controller files that handle the application's business logic.<br>
• models/: The models directory holds the data models representing the application's data and business rules.<br>
• views/: This directory contains the view files responsible for the user interface and presentation.<br>
• public/: The public directory holds static files (e.g., CSS, client-side JavaScript) accessible by the front-end.<br>
• routes/: This directory contains the route files, defining the URL routes and associating them with the corresponding controller actions.<br>

# License
This project is licensed under the MIT License, allowing you to modify and distribute the code as you see fit. Please refer to the LICENSE file for more details.
