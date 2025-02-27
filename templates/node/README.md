# NodeJS Template

Fullstack server side render Node.js web application template.

Express.js, Node.js and MongoDB.

## Get Started

1. Create a **`config.env`** file to your repo, and paste the following environment variables:

    ```
    NODE_ENV=development
    PORT=8000
    DATABASE=#yourDatabase
    DATABASE_PASSWORD=#yourDBpassword
    DATABASE_LOCAL=mongodb://localhost:27017/#your-database-name

    JWT_SECRET=#yourJWTsecret
    JWT_EXPIRES_IN=1d
    JWT_COOKIE_EXPIRES_IN=1

    SENDGRID_API_KEY=#yourAPIkey
    ```

    Make sure MongoDB is installed and running a local database. If you need help setting up, check out [MongoDB's doc](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).

2. Install dependencies

    ```
    npm i
    ```

3. Run the node server in one terminal:
    ```
    npm run dev
    ```
    And listen for events in a seperate terminal:
    ```
    npm run watch
    ```
