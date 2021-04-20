# email_landing_page
A landing page built using express + node.js that gets an email input and stores it inside a mysql database.

### Requirements

This web app assumes that you have MySQL installed and your local terminal properly configured to run Node commands.

### Setup

1. Open your local terminal and run `npm install`. This will install all the required packages to a local `node_modules` directory. 

2. Open the MySQL CLI and run the `source schema.sql` command to setup the database that stores the email information.

3. Create an `.env` file and input your MySQL credentials so that the landing page can communicate with your database. Structure the `.env` file as follows:

```
DB_HOST=<insert hostname here>
DB_USER=<insert db username here>
DB_PASSWORD=<insert db password here>
```

### Run

You are now able to run the page server! To do this, simply run the command below:

`node app.js`

### Additional Features

Once the server is running, you can go to the `/generate` route to generate fake data and insert it to the `landing_page` database.