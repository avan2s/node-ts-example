<h1>node js example project with typescript</h1>
This project represents an example node js project written in typescript.

<h2>Guide how to integrate typescript in your node js application</h2>

1. Install typescript globally in order to use tsc command:

```
npm install typescript -g
```

2. Init nodejs project

```
npm init

```

3. Install dev dependencies:

```
npm install -D nodemon typescript tslint @types/node jest ts-jest @types/jest
```

4. Configure typescript compiler

```
## create initial typescript compiler config file:
tsc --init

## set the following properties in the created tsc --init file:

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

5. Configure tslint

```
./node_modules/.bin/tslint --init

# allow console logs in typescript code, that it looks like this in tslint.json:
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false
    },
    "rulesDirectory": []
}
```

6. add an example app:

```
# Install libraries
npm install express
npm install -D @types/express

# add src/app.ts file
import express, { Request, Response } from 'express';

const restApi = express();
const port = 3000;

restApi.get('/', (req: Request, response: Response) => {
    response.send('Hello Rest Api');
})

restApi.listen(port, () => {
    console.log(`Rest Api is listening on port ${port}`);
})

# in package.json add the "start" command to the scripts secition and set the main file:
  "main": "dist/app.js",
  "scripts": {
    "start": "tsc && node dist/app.js",
    "lint": "tslint --project .",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
With this <i>npm start</i> will tanspile the typescript code to javascript first and then  runs the native javascript code.
