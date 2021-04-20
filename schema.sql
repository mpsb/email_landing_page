CREATE DATABASE landing_page;
USE landing_page;

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

-- test row
INSERT INTO users (email)
VALUES ('test2@gmail.com'), ("test2@yahoo.com");