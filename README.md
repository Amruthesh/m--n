# m--n
Learning the mongo and node integration in the MEAN stack

This is a sample nodejs application that connects to a mongo database and dumps the data in a GET call. There is no authentication, but a simple get call that will return the data stored in the DB

### Pre-Requisites

1. ###### Node & npm
2. ###### express - npm install express
3. ###### mongodb driver - npm install mongodb

### Steps to run the application

1. git clone the project
2. cd into the directory
3. In a text editor, modify the configurations present in the configs directory as necessary. **app.js** contains hostname and the port on which the application has to listen. **db.js** contains the dbname and the URL for connecting to the mongo database.
4. Run the following command to start the application - `node main.js`. This should start the server and the port on which it is listening will be logged on the console.
5. Access the application, like - `http://localhost:6262/entries`
6. If there is any data in the database and the collection, then that will be dumpe
