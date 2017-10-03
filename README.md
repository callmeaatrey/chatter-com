# ChatterCom

A social broadcasting platform.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Installing

To install all the dependancies, execute the following command:
```
npm install
```

Also, you need an instance of MongoDB running locally on port 27017.

To start the primary daemon process for MongoDB, execute the following commands:
```
export PATH=`<mongodb-install-directory>`/bin:$PATH
// skip sudo if read-write access control is unrestricted for chatter-com
sudo mongod
```

Open another terminal if you want to start the mongo shell and execute the command:
```
mongo chatter-com
```

To start the application only if you installed the dependancies and successfully connected to the DB, execute the command:

```
npm run both
```

## Built With

* [React](http://facebook.github.io/react/) - User interface building library
* [Express](https://expressjs.com/) - Node.js web application framework
* [MongoDB](https://mongodb.com/) - Document-oriented database program

### UI Inspiration

The user interface of the application is derived based on the following mockups:

![Chatter-Com Mockups](https://raw.githubusercontent.com/callmeaatrey/cleopatra/master/server/static/img/mockups/mockup_compilation.png)

## Authors

* **Shikher Aatrey (itsaatrey@gmail.com)**

## Contact

* Feel free to reach me if you have trouble with the application on my email.

## Credits

* Vishal Gowda (@farthVader91)
