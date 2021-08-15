# server-deployment-practice
#### Describe and Define

- Node and the V8 Engine

#### Execute

- Setup a Node.js Package using npm
- Create CommonJS modules
- Create a simple express server
- See passing tests via GitHub actions (CI)
- Deploy to Heroku using CD

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Importing and Exporting Modules

If one module **exports** a function or an object ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```




### Some notes:
1. We should install (npm i) to all dependencies we need 
2. if we added error handlers to all not exist domain we should put it in the end of server file.
3. Edit scripts in package.json.
4. dont forget to install dotenv if we not add || in port.





 - [Heroku applications link](https://mariam-server-deploy-dev.herokuapp.com/)
 - [Heroku applications link 2](https://mariam-server-deploy-prod.herokuapp.com/)
 - [Github actions link](https://github.com/MariamAlshammari/server-deployment-practice/actions)
 - [Pull request link](https://github.com/MariamAlshammari/server-deployment-practice/pull/2)

