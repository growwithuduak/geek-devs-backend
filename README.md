# Geek Devs Music-Playlist Backend

Repository for Geek Devs' music playlist backend code.

## Project Overview

The repository contains the server-side code for the Geek-devs music-playlist web application. It is a microservice application that powers the entire functionality of the platform, enabling users to create, manage, and design their music library seamlessly.

The microservices provide APIs to handle user authentication, email notification, file upload, playlist creation, and management. Authenticated users have the capability to create
a new playlist, modify an existing one or delete an entire playlist.

## Features Of The Services

### User authentication service:

- Provides endpoints to allow a user to login and logout.
- Creates auth tokens when a user is logged in.
- Provides an endpoint to verify if a user is logged in a session.

### File upload service:

- Provides an endpoint that takes in an uploaded CSV file and depending on the query param type, does one of the following:
  - Parses the file and extracts emails and then calls the user profile service to create user accounts.
  - Parses the file and extracts the songs from the file, then calls the playlist service to create the playlist with the songs.
- Has proper error handling and returns 500 errors for defined errors.
- Has proper access control to verify that only a logged-in user is able to upload a file.
- Sends notifications when a file uploads successfully (with the FE).

### Notification service:

- Provides endpoints for other services to send notifications.
  Sends notifications for any of the following events:
- When a user account is created successfully.
- When a playlist is created successfully.
- When a file is parsed successfully.

### Playlist service:

- Provides endpoints for creating, updating, and deleting a user playlist.
- Provides an endpoint for adding a single song to an existing playlist.
- Provides an endpoint for adding a batch of songs to a playlist.
- Provides proper access control to verify that only a logged-in user is able to create a playlist.
- Sends notifications when a new playlist is created.

### User Profile service:

- Provides endpoints for creating and updating a user.
- Sends notifications when a user account is created.
- Provides a batch endpoint for creating multiple user accounts.

## Installation Process

1. Clone the repository:
   ```shell
   git clone https://github.com/growwithuduak/geek-devs-backend.git

   ```
2. Install all dependencies:
   ```shell
   npm install

   ```
3. Configure environment variables:

- Create a .env file
- Update the private variables with your specific configuration (e.g., database credentials, desired server Port).

4. Start the server:
   ```shell
   npm run start

   ```
5. The server on default should start on PORT 3000 if PORT value is not stated; `http://localhost:3000`

## Routes and API Endpoints

...
