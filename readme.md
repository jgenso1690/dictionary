## Dictionary Autocomplete App
# Description
    This dictionary app allows the user to insert a word and give autocomplete options while writting.
    After submitting or selecting a word it will give back the definition.

# Steps to start the application:.

    Backend
    1. Run 'npm init' to install all the dependencies.
    2. To create and seed the database: 
        Execute the command: mysql -u root -p < ./db/englishdictionary.sql
        Use password: password
    3. Run 'npm start' to start the server
        Install npm curl to try the server with curl command: curl http://localhost:3000/inputhello
        This command will give the definition of the word 'hello' back, for other definitions replace 'hello' with
        the word of your choice.

    Frontend
    4. Run 'npm run build' to compile JS modules with webpack.
    5. Open [http://localhost:3000/](http://localhost:3000/)
    6. Look for a word of your preference, click over the word you would like to see the definition. 

# Stack
 * Node: "10.21.0"
 * Express: "^4.17.1"
 * Axios: "^0.20.0"
 * MySQL: "^2.18.1"
 * React: "^16.13.1"
 * React-dom: "^16.13.1"
 * Jest: "^26.4.2"
 * Babel-loader: "^8.1.0"
