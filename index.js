const express = require('express');

/** Will throw an ES Lint ERROR
 *  - see `no-unresolved`
 */
const myNonExistantPackage = require('nodemon');

const app = express();

/** Will throw an ES Lint WARNING
 *  - see `no-unused-vars` in config
 */
const x = 'hello';

app.listen(3000, () => console.log('weeee'));
