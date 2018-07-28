# Node-App-Starter
A boilerplate for Node.js web applications.

This boilerplate is meant to make it easy to get up and running on web applications using Node/Express on the backend with the option to easily connect to a MongoDB database using Mongoose.

The back-end file structure also includes:
* Routes - Where we can define API routes and whatnot.
* Controllers - Where route handlers/controllers go. 
* Models - Where we can define any Mongoose Schemas we have.

On the front-end a small Webpack configuration is set up to allow for Javascript compilation with Babel. The following npm script tells
webpack to watch our js files for changes and rebuilds upon updates:

~~~
# Runs webpack --progress --watch
npm run watch
~~~

SASS compilation meanwhile
is handled node-sass and can be run using: 

~~~
# Runs node-sass -w client/src/sass/main.scss client/build/css/style.css
npm compile:sass  
~~~

All static files meant for the front-end including HTML files are served up by Express from the client directory. 

## To Use