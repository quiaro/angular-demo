angular-demo
============

Demo app using angular

This application started as an Angular boilerplate project using [Yeoman](http://yeoman.io/index.html), but tries to adapt a series of best practices from the [AngularJS CRUD demo app](https://github.com/angular-app/angular-app) by Pawel Kozlowski & Peter Bacon Darwin. 

Requirements
------------

*Any lines starting with $ are commands to type in a terminal window (the "$" is not meant to be included)*

In order to install this application, you will first need to have the following installed:

1.   [Node](http://nodejs.org/)
2.   NPM : Package Manager (comes by default with the Node installer)
3.   Grunt : Task Runner/Build Tool
4.   Bower : Component Manager

After you've installed Node and NPM, if you haven't yet installed the Grunt-CLI plugin and Bower globally, you can do so by typing the following command:

`$ npm install -g grunt-cli bower`

Installing
----------

To install this application:

1.   Clone the repo:

    `$ git clone https://github.com/quiaro/angular-demo`

2.   Go to the home directory of the app:

    `$ cd angular-demo`

3.   Fetch all package dependencies

    `$ npm install`

4.   Fetch all component dependencies

    `$ bower install`

Tasks
-----

The application comes with three grunt tasks:

*	To work on the app: `$ grunt server`
*	To test the app: `$ grunt test`
*	To build the application for deployment: `$ grunt`
