# street_blog!

## This challenge is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 

## As your first opportunity to show employers your collaborative skills and coding abilities, this particular project will be a focal point of your portfolio. Employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed collaborative work you have in your portfolio, the more likely you are to get an interview and a job. That’s why one of the requirements for this project is that you add it to your portfolio.

## Deploy to heroku
* [Street Blog LINK](https://young-fortress-79519.herokuapp.com/)

## Project Requirements
- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.
- Use MySQL and the Sequelize ORM for the database.
- Have both GET and POST routes for retrieving and adding new data.
- Be deployed using Heroku (with data).
- Use at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI.
- Be responsive.

## User Story
- Blog postings who writes about street posts
- I WANT a CMS-style blog site
- SO THAT I can publish Blog posts

## Dev Steps 
- install packages using npm install 
- create .env file and add DB_NAME; DB_USER; DB_PW
- In the address bar of the project folder type cmd to open terminal and enter mysql -u root -p
- Enter Password to login to SQL shell
- Source the DB using source db/schema.sql
- Enter show databases
- use project database name
- Quit 
- Now in the GIT Bash Terminal in vs code seed the database
- Enter npm run seed
- Then follwed by npm start to start the server 

## Tests
- Run npm test

## Deployed App View!


![Wireframe]![Wireframe](https://user-images.githubusercontent.com/26659001/154849810-b2194223-77f0-49f0-a59c-2fe07864ec91.jpg)

## Build with:
- Node.js
- Express
- Mysql2
- nodemon
- sequelize
- star-ratings
- connect-session-sequelize
- dotenv
- multer

## Package Used for uploading Image
- Multer 
- But we had issue after the image is uploaded. Dipalued message is:  Not allowed to load local resource: file:///C:/fakepath/BEN_0620.jpg

## Known issues
- Images not loading 

