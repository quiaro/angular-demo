angular-demo
============

The goal of this application is to adapt and demo a series of best practices in terms of structure from the [AngularJS CRUD demo app](https://github.com/angular-app/angular-app) by Pawel Kozlowski & Peter Bacon Darwin. This application started out as an Angular boilerplate project using [Yeoman](http://yeoman.io/index.html), therefore it makes use of an effective development/build environment using Grunt tasks and lets the user easily manage its dependencies using Bower.

Requirements
------------

To work on or build this application you will first need to install [Node](http://nodejs.org/).

Node can be installed in the following ways:

1.   Using the [installer](http://nodejs.org/download/)
     *The Mac installer will install node under /usr/local/bin so you will need to have admin rights to complete the install.

2.   [Building the source code](https://github.com/joyent/node/wiki/Installation)
     This way you can choose to install Node in a custom folder instead of a global directory by using the --prefix config option, thus you are not required to have admin rights to complete the install.

3.   [Via a package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

Installing
----------

### Manual Install

*Any lines starting with $ are commands to type in a terminal window (the "$" is not meant to be included)*

To install this application:

1.   Install the Grunt-CLI and Bower plugins globally:

    `$ npm install -g grunt-cli bower`

2.   Clone the repo:

    `$ git clone https://github.com/quiaro/angular-demo`

3.   Go to the home directory of the app:

    `$ cd angular-demo`

4.   Fetch all package dependencies

    `$ npm install`

5.   Fetch all component dependencies

    `$ bower install`


### Automatic Install for Mac OS X and *nix systems

1.   Clone the repo:

    `$ git clone https://github.com/quiaro/angular-demo`

    *This command will clone the repo into a folder with the repo's name (i.e. angular-demo) inside the current directory. If you wish to clone the repo directly into the current directory, use this other command instead*:

    `$ git clone https://github.com/quiaro/angular-demo .`

2.  Run the install script found in the project root:

    `$ sudo ./install.sh`

    *If you installed node using the installer (**Requirements, step 1**), then you will need admin rights to run the install script since it will install the Grunt-CLI and Bower plugins globally. Otherwise, if you installed Node in a custom folder to which you have write access, then sudo is unnecessary to run the script: *

    `$ ./install.sh`

Tasks
-----

A established workflow using grunt tasks can be outlined as follows:

1.    Write units tests, then write code: `$ grunt test`
       
       Start out by writing unit tests for the features or bugs you wish to fix, then write the code that implements the features or bug fixes making sure that all unit tests pass.

2.    Lint your code: `$ grunt lint`
       
       Make sure your code adheres to specific code guidelines.

3.    Run the app : `$ grunt server`
       
       Test the look and feel of the app to guarantee a positive user experience.

4.    Build the app: `$ grunt`
       
       Build the application for deployment and run it on any HTTP server.